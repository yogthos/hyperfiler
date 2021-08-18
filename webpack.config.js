/* eslint-disable prefer-template */
/* eslint-disable @typescript-eslint/no-var-requires */

const fs = require('fs');
const path = require('path');

const entryPoint = './out/cli.js';
const outDir = path.join(__dirname, 'dist');
const outFile = 'hyperfiler';

function dedent(str) {
  return str
    .trim()
    .split('\n')
    .map(line => line.trim())
    .join('\n');
}

module.exports = {
  entry: entryPoint,
  target: 'node',
  mode: 'development',
  externals: {
    canvas: '{}',
  },
  plugins: [
    {
      apply: (compiler) => {
        compiler.hooks.afterEmit.tap('BuildWindowsPlugin', (compilation) => {
          // Getting the HyperFiler bundle path and reading the bundle.
          const bundlePath = path.join(outDir, outFile);
          const bundle = fs.readFileSync(bundlePath).toString();

          // Getting the paths to the distribution folder, and the bundle
          // file path and README path.
          const windowsBundleFolderPath = path.join(
            outDir,
            'windows',
          );

          const windowsBundleFilePath = path.join(
            windowsBundleFolderPath,
            `${outFile}.js`,
          );

          const windowsReadmeFilePath = path.join(
            windowsBundleFolderPath,
            'README.adoc',
          );

          // Creating the Windows README file contents.
          const windowsReadmeFileContents = dedent(`
            = Windows Installation
  
            For installation on Windows, first ensure that you have Node.JS and NPM
            installed. Follow the instructions for installing Node.JS and NPM
            link:https://nodejs.org/en/download/[here]. Once installed, run the following
            command to install HyperFiler:
            
            [source,bash]
            ----
            npm install hyperfiler -g
            ----
          `);

          // If the Windows folder path does not exist, creating a new Windows
          // folder for this distribution.
          if (!fs.existsSync(windowsBundleFolderPath)) {
            fs.mkdirSync(windowsBundleFolderPath);
          }

          // Writing the bundle and the README to the distribution folder.
          fs.writeFileSync(windowsBundleFilePath, bundle);
          fs.writeFileSync(windowsReadmeFilePath, windowsReadmeFileContents);
        });
      },
    },
    {
      apply: (compiler) => {
        compiler.hooks.afterEmit.tap('BuildNixPlugin', (compilation) => {
          // Getting the HyperFiler bundle path, reading the bundle, and adding
          // a hashbang to the bundle with the path to the node interpreter.
          const bundlePath = path.join(outDir, outFile);
          const bundle = fs.readFileSync(bundlePath).toString();
          const modifiedBundle = `#!/usr/bin/env node\n${bundle}`;

          // Creating directories to various *Nix distributions, writing the
          // modified bundle to each distribution folder, and writing a README
          // file in each folder.
          const nixDistributions = [
            {
              distribution: 'macos',
              readme: `
                = Mac HyperFiler Installation

                For installation on MacOSX, first ensure that you have Node.JS and NPM
                installed. Follow the instructions for installing Node.JS and NPM
                link:https://nodejs.org/en/download/[here]. Once installed, run the following
                command to install HyperFiler:
                
                [source,bash]
                ----
                npm install hyperfiler -g
                ----
              `,
            },
            {
              distribution: 'debian',
              readme: `
                = Debian HyperFiler Installation

                To install HyperFiler and the dependencies from the package repository, run the
                following commands:

                [source,bash]
                ----
                sudo apt-get install -y nodejs imagemagick pngcrush pngquant gifsicle libwebp6 ffmpeg fonttools mat2
                cat ./hyperfiler | sudo tee /usr/local/bin/hyperfiler > /dev/null
                chmod +x /usr/local/bin/hyperfiler
                ----
              `,
            },
            {
              distribution: 'ubuntu',
              readme: `
                = Ubuntu HyperFiler Installation

                To install HyperFiler and the dependencies from the package repository, run the
                following commands:

                [source,bash]
                ----
                sudo apt-get install -y nodejs imagemagick pngcrush pngquant gifsicle libwebp6 ffmpeg fonttools mat2
                cat ./hyperfiler | sudo tee /usr/local/bin/hyperfiler > /dev/null
                chmod +x /usr/local/bin/hyperfiler
                ----
              `,
            },
            {
              distribution: 'fedora',
              readme: `
                = Fedora HyperFiler Installation

                To install HyperFiler and the dependencies from the package repository, run the
                following commands:

                [source,bash]
                ----
                sudo dnf install -y nodejs ImageMagick pngcrush pngquant gifsicle libwebp fonttools
                cat ./hyperfiler | sudo tee /usr/local/bin/hyperfiler > /dev/null
                chmod +x /usr/local/bin/hyperfiler
                ----
              `,
            },
            {
              distribution: 'arch',
              readme: `
                = Arch Linux HyperFiler Installation

                To install HyperFiler and the dependencies from the package repository, run the
                following commands (these need to be run on the **root** account):

                [source,bash]
                ----
                pacman -S --noconfirm which curl nodejs imagemagick pngcrush pngquant gifsicle libwebp ffmpeg python-fonttools mat2
                cat ./hyperfiler > /usr/local/bin/hyperfiler
                chmod +x /usr/local/bin/hyperfiler
                ----
              `,
            },
            {
              distribution: 'freebsd',
              readme: `
                = FreeBSD HyperFiler Installation

                To install HyperFiler and the dependencies from the package repository, run the
                following commands (these need to be run on the **root** account):

                [source,bash]
                ----
                pkg install -y curl node ImageMagick7 pngcrush pngquant gifsicle webp ffmpeg py37-fonttools
                cat ./hyperfiler > /usr/local/bin/hyperfiler
                chmod +x /usr/local/bin/hyperfiler
                ----
              `,
            },
            {
              distribution: 'openbsd',
              readme: `
                = OpenBSD HyperFiler Installation

                To install HyperFiler and the dependencies from the package repository, run the
                following commands (these need to be run on the **root** account):

                [source,bash]
                ----
                pkg_add curl node ImageMagick pngcrush gifsicle libwebp ffmpeg
                cat ./hyperfiler > /usr/local/bin/hyperfiler
                chmod +x /usr/local/bin/hyperfiler
                ----
              `,
            },
            {
              distribution: 'haiku',
              readme: `
                = HaikuOS HyperFiler Installation

                To install HyperFiler and the dependencies from the package repository, run the
                following commands (these need to be run on the **root** account):

                [source,bash]
                ----
                pkgman install -y nodejs imagemagick pngcrush pngquant gifsicle libwebp ffmpeg fonttools
                cat ./hyperfiler > /boot/system/non-packaged/bin/hyperfiler
                chmod +x /boot/system/non-packaged/bin/hyperfiler
                ----
              `,
            },
          ];

          // Iterating through all of the *Nix distributions.
          for (const nixDistribution of nixDistributions) {
            // Getting the distribution name and README file contents.
            const distribution = nixDistribution.distribution;
            const readmeContents = dedent(nixDistribution.readme);

            // Getting the paths to the distribution folder, and the bundle
            // file path and README path.
            const nixBundleFolderPath = path.join(
              outDir,
              distribution,
            );

            const nixBundleFilePath = path.join(
              nixBundleFolderPath,
              outFile,
            );

            const nixReadmeFilePath = path.join(
              nixBundleFolderPath,
              'README.adoc',
            );

            // If the *Nix folder path does not exist, creating a new *Nix
            // folder for this distribution.
            if (!fs.existsSync(nixBundleFolderPath)) {
              fs.mkdirSync(nixBundleFolderPath);
            }

            // Writing the bundle and the README to the distribution folder.
            fs.writeFileSync(nixBundleFilePath, modifiedBundle);
            fs.writeFileSync(nixReadmeFilePath, readmeContents);
          }
        });
      },
    },
    {
      apply: (compiler) => {
        compiler.hooks.afterEmit.tap('CleanupPlugin', (compilation) => {
          // Deleting the original webpack output bundle after all of the
          // platform-specific bundle directories have been created.
          const bundlePath = path.join(outDir, outFile);

          fs.unlinkSync(bundlePath);
        });
      },
    },
  ],
  output: {
    path: outDir,
    filename: outFile,
  },
};
