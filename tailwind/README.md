
      https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
Hash: 927904922c2cededf815
Version: webpack 4.43.0
Time: 5679ms
Built at: 06/19/2020 9:10:56 PM
                Asset       Size  Chunks                    Chunk Names
     blocks.asset.php  108 bytes       0  [emitted]         blocks
           blocks.css  263 bytes       0  [emitted]         blocks
            blocks.js  934 bytes       0  [emitted]         blocks
     editor.asset.php  108 bytes       1  [emitted]         editor
           editor.css  171 bytes       1  [emitted]         editor
      index.asset.php  208 bytes       2  [emitted]         index
             index.js   12.8 KiB       2  [emitted]         index
   tailwind.asset.php  108 bytes       3  [emitted]         tailwind
         tailwind.css   1.47 MiB       3  [emitted]  [big]  tailwind
          tailwind.js  936 bytes       3  [emitted]         tailwind
underscores.asset.php  108 bytes       4  [emitted]         underscores
      underscores.css   7.82 KiB       4  [emitted]         underscores
       underscores.js  936 bytes       4  [emitted]         underscores
Entrypoint index = index.js index.asset.php
Entrypoint blocks = blocks.css blocks.js blocks.asset.php
Entrypoint editor = editor.css editor.js editor.asset.php
Entrypoint tailwind [big] = tailwind.css tailwind.js tailwind.asset.php
Entrypoint underscores = underscores.css underscores.js underscores.asset.php
 [0] external {"this":["wp","element"]} 42 bytes {2} [built]
 [1] external {"this":["wp","i18n"]} 42 bytes {2} [built]
 [2] external {"this":["wp","blockEditor"]} 42 bytes {2} [built]
 [3] external {"this":["wp","hooks"]} 42 bytes {2} [built]
 [4] external {"this":["wp","components"]} 42 bytes {2} [built]
 [6] external {"this":["wp","compose"]} 42 bytes {2} [built]
 [8] external {"this":["wp","blocks"]} 42 bytes {2} [built]
 [9] ./src/blocks.scss 39 bytes {0} [built]
[10] ./src/editor.scss 39 bytes {1} [built]
[11] ./css/tailwind.css 39 bytes {3} [built]
[12] ./css/underscores.css 39 bytes {4} [built]
[13] ./src/index.js + 7 modules 15.9 KiB {2} [built]
     | ./src/index.js 233 bytes [built]
     | ./src/blocks/index.js 54 bytes [built]
     | ./src/filters/index.js 120 bytes [built]
     | ./src/gatherpress-icon.js 1.17 KiB [built]
     | ./src/blocks/container/index.js 1.05 KiB [built]
     | ./src/filters/code-name/index.js 765 bytes [built]
     | ./src/filters/code-name-2/index.js 2.84 KiB [built]
     | ./src/filters/datetime/index.js 9.7 KiB [built]
    + 6 hidden modules

WARNING in asset size limit: The following asset(s) exceed the recommended size limit (244 KiB).
This can impact web performance.
Assets: 
  tailwind.css (1.47 MiB)

WARNING in entrypoint size limit: The following entrypoint(s) combined asset size exceeds the recommended limit (244 KiB). This can impact web performance.
Entrypoints:
  tailwind (1.47 MiB)
      tailwind.css
      tailwind.js
      tailwind.asset.php


WARNING in webpack performance recommendations: 
You can limit the size of your bundles by using import() or require.ensure to lazy load some parts of your application.
For more info visit https://webpack.js.org/guides/code-splitting/
MBPro-15:gatherpress apple$ 
