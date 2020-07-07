# Dev-notes.md


```sh
MBPro-15:assets apple$ npm run build

> gatherpress@1.1.0 build /Users/apple/Local Sites/pickling/app/public/wp-content/themes/gatherpress/assets
> wp-scripts build

  
   ⚠️  Tailwind is not purging unused styles because no template paths have been provided.
      If you have manually configured PurgeCSS outside of Tailwind or are deliberately not
      removing unused styles, set `purge: false` in your Tailwind config file to silence
      this warning.
   
      https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
  
   ⚠️  Tailwind is not purging unused styles because no template paths have been provided.
      If you have manually configured PurgeCSS outside of Tailwind or are deliberately not
      removing unused styles, set `purge: false` in your Tailwind config file to silence
      this warning.
   
      https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
  
   ⚠️  Tailwind is not purging unused styles because no template paths have been provided.
      If you have manually configured PurgeCSS outside of Tailwind or are deliberately not
      removing unused styles, set `purge: false` in your Tailwind config file to silence
      this warning.
   
      https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
Hash: 76fb262331f68f038ec9
Version: webpack 4.42.1
Time: 5978ms
Built at: 07/07/2020 6:28:26 PM
                 Asset       Size  Chunks                    Chunk Names
      editor.asset.php  108 bytes       0  [emitted]         editor
            editor.css    1 bytes       0  [emitted]         editor
event_single.asset.php  155 bytes       1  [emitted]         event_single
       event_single.js    8.9 KiB       1  [emitted]         event_single
       index.asset.php  189 bytes       2  [emitted]         index
              index.js   11.6 KiB       2  [emitted]         index
      script.asset.php  108 bytes       3  [emitted]         script
             script.js  934 bytes       3  [emitted]         script
       style.asset.php  108 bytes       4  [emitted]         style
             style.css   1.06 MiB       4  [emitted]  [big]  style
    tailwind.asset.php  108 bytes       5  [emitted]         tailwind
          tailwind.css   1.06 MiB       5  [emitted]  [big]  tailwind
Entrypoint index = index.js index.asset.php
Entrypoint tailwind [big] = tailwind.css tailwind.js tailwind.asset.php
Entrypoint style [big] = style.css style.js style.asset.php
Entrypoint script = script.js script.asset.php
Entrypoint event_single = event_single.js event_single.asset.php
Entrypoint editor = editor.css editor.js editor.asset.php
 [0] external {"this":["wp","element"]} 42 bytes {1} {2} [built]
 [2] external {"this":"React"} 42 bytes {1} {2} [built]
 [3] external {"this":["wp","components"]} 42 bytes {2} [built]
 [8] external {"this":["wp","i18n"]} 42 bytes {1} [built]
 [9] external {"this":["wp","date"]} 42 bytes {2} [built]
[11] external {"this":["wp","apiFetch"]} 42 bytes {2} [built]
[15] external {"this":"ReactDOM"} 42 bytes {1} [built]
[16] ./src/block-editor/blocks/index.js 32 bytes {2} [built]
[17] ./src/block-editor/filters/index.js 0 bytes {2} [built]
[18] ./src/tailwind.scss 39 bytes {5} [built]
[19] ./src/style.scss 39 bytes {4} [built]
[20] ./src/js/index.js 0 bytes {3} [built]
[21] ./src/editor.scss 39 bytes {0} [built]
[22] ./src/index.js + 13 modules 18.5 KiB {2} [built]
     | ./src/index.js 224 bytes [built]
     | ./src/block-editor/index.js 91 bytes [built]
     | ./images/gatherpress-icon.js 1.17 KiB [built]
     | ./src/block-editor/plugins/index.js 59 bytes [built]
     | ./src/block-editor/plugins/event-settings/index.js 806 bytes [built]
     | ./src/block-editor/plugins/helpers.js 944 bytes [built]
     | ./src/block-editor/plugins/event-settings/datetime-panel/index.js 2.19 KiB [built]
     | ./src/block-editor/plugins/event-settings/options-panel/index.js 201 bytes [built]
     | ./src/block-editor/plugins/event-settings/datetime-panel/datetime-start/label.js 2.95 KiB [built]
     | ./src/block-editor/plugins/event-settings/datetime-panel/datetime-end/label.js 3.44 KiB [built]
     | ./src/block-editor/plugins/event-settings/datetime-panel/helpers.js 1.79 KiB [built]
     | ./src/block-editor/plugins/event-settings/datetime-panel/datetime-start/index.js 755 bytes [built]
     | ./src/block-editor/plugins/event-settings/datetime-panel/datetime-end/index.js 745 bytes [built]
     | ./src/block-editor/plugins/event-settings/options-panel/announce-event/index.js 3.18 KiB [built]
[23] ./src/js/event/single.js + 2 modules 11.4 KiB {1} [built]
     | ./src/js/event/single.js 470 bytes [built]
     | ./src/js/event/attendance/attendance.js 5.97 KiB [built]
     | ./src/js/event/attendance/button.js 4.91 KiB [built]
    + 12 hidden modules

WARNING in asset size limit: The following asset(s) exceed the recommended size limit (244 KiB).
This can impact web performance.
Assets: 
  style.css (1.06 MiB)
  tailwind.css (1.06 MiB)

WARNING in entrypoint size limit: The following entrypoint(s) combined asset size exceeds the recommended limit (244 KiB). This can impact web performance.
Entrypoints:
  tailwind (1.06 MiB)
      tailwind.css
      tailwind.asset.php
  style (1.06 MiB)
      style.css
      style.asset.php


WARNING in webpack performance recommendations: 
You can limit the size of your bundles by using import() or require.ensure to lazy load some parts of your application.
For more info visit https://webpack.js.org/guides/code-splitting/
MBPro-15:assets apple$ 
```