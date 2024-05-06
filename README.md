### EnEditPanel
Скрипт предназначен для работы с плагином **Tempermonkey**

### Настройка скрипта под личные требования
Редактирование настроек **EnEditPanel** осуществляется в файле **enEditPanel.js**
Для работы скрипта, файл загружается на сервер **Encounter** и подключается через панель **Tempermonkey** в строке:
```
// @require      http://d1.endata.cx/images/personal/1484341/enEditPanel.js
```

### Подключение скрипта к серверверам Encounter
В панели управления **Tempermonkey** добавить: 
```
// ==UserScript==
// @name         EEP EnEditPanel
// @namespace    https://arena.en.cx/
// @version      4.3.2023
// @description  EEP - tagging panel for the game engine
// @author       VIRUSS. Telegram: @free_md

// @match        https://*.en.cx/Administration/Games/TaskEdit.aspx?gid=*
// @match        https://*.en.cx/Administration/Games/TaskEdit.aspx?action=TaskEdit&gid=*
// @match        https://*.en.cx/Administration/Games/TaskEdit.aspx?gid=*&action=TaskEdit&tid=*
// @match        https://*.en.cx/Administration/Games/TaskEdit.aspx?level=*&gid=*&action=TaskEdit&tid=*

// @match        https://*.en.cx/Administration/Games/PromptEdit.aspx?gid=*&level=*
// @match        https://*.en.cx/Administration/Games/PromptEdit.aspx?level=*&gid=*&prid=*&action=PromptEdit
// @match        https://*.en.cx/Administration/Games/PromptEdit.aspx?action=PromptEdit&penalty=*&level=*&prid=*&gid=*

// @match        https://*.en.cx/Administration/Games/BonusEdit.aspx?gid=*&level=*&action=add
// @match        https://*.en.cx/Administration/Games/BonusEdit.aspx?action=edit&gid=*
// @match        https://*.en.cx/Administration/Games/BonusEdit.aspx?level=*&gid=*&bonus=*&action=edit

// @match        https://*.encounter.cx/Administration/Games/TaskEdit.aspx?gid=*
// @match        https://*.encounter.cx/Administration/Games/TaskEdit.aspx?action=TaskEdit&gid=*
// @match        https://*.encounter.cx/Administration/Games/TaskEdit.aspx?gid=*&action=TaskEdit&tid=*
// @match        https://*.encounter.cx/Administration/Games/TaskEdit.aspx?level=*&gid=*&action=TaskEdit&tid=*

// @match        https://*.encounter.cx/Administration/Games/PromptEdit.aspx?gid=*&level=*
// @match        https://*.encounter.cx/Administration/Games/PromptEdit.aspx?level=*&gid=*&prid=*&action=PromptEdit
// @match        https://*.encounter.cx/Administration/Games/PromptEdit.aspx?action=PromptEdit&penalty=*&level=*&prid=*&gid=*

// @match        https://*.encounter.cx/Administration/Games/BonusEdit.aspx?gid=*&level=*&action=add
// @match        https://*.encounter.cx/Administration/Games/BonusEdit.aspx?action=edit&gid=*
// @match        https://*.encounter.cx/Administration/Games/BonusEdit.aspx?level=*&gid=*&bonus=*&action=edit

// @match        https://*.quest.ua/Administration/Games/TaskEdit.aspx?gid=*
// @match        https://*.quest.ua/Administration/Games/TaskEdit.aspx?action=TaskEdit&gid=*
// @match        https://*.quest.ua/Administration/Games/TaskEdit.aspx?gid=*&action=TaskEdit&tid=*
// @match        https://*.quest.ua/Administration/Games/TaskEdit.aspx?level=*&gid=*&action=TaskEdit&tid=*

// @match        https://*.quest.ua/Administration/Games/PromptEdit.aspx?gid=*&level=*
// @match        https://*.quest.ua/Administration/Games/PromptEdit.aspx?level=*&gid=*&prid=*&action=PromptEdit
// @match        https://*.quest.ua/Administration/Games/PromptEdit.aspx?action=PromptEdit&penalty=*&level=*&prid=*&gid=*

// @match        https://*.quest.ua/Administration/Games/BonusEdit.aspx?gid=*&level=*&action=add
// @match        https://*.quest.ua/Administration/Games/BonusEdit.aspx?action=edit&gid=*
// @match        https://*.quest.ua/Administration/Games/BonusEdit.aspx?level=*&gid=*&bonus=*&action=edit

// @match        https://quest.ua/Administration/Games/TaskEdit.aspx?gid=*
// @match        https://quest.ua/Administration/Games/TaskEdit.aspx?action=TaskEdit&gid=*
// @match        https://quest.ua/Administration/Games/TaskEdit.aspx?gid=*&action=TaskEdit&tid=*
// @match        https://quest.ua/Administration/Games/TaskEdit.aspx?level=*&gid=*&action=TaskEdit&tid=*

// @match        https://quest.ua/Administration/Games/PromptEdit.aspx?level=*&gid=*&prid=*&action=PromptEdit
// @match        https://quest.ua/Administration/Games/PromptEdit.aspx?action=PromptEdit&penalty=*&level=*&prid=*&gid=*

// @match        https://quest.ua/Administration/Games/BonusEdit.aspx?gid=*&level=*&action=add
// @match        https://quest.ua/Administration/Games/BonusEdit.aspx?action=edit&gid=*
// @match        https://quest.ua/Administration/Games/BonusEdit.aspx?level=*&gid=*&bonus=*&action=edit

// @grant        none
// @require      https://d1.endata.cx/images/personal/1484341/enEditPanel.js
// ==/UserScript==
```
