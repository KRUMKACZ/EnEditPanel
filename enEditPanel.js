const version = 'v 20.5.24';
$('head').append(
  '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/fontawesome.min.css" integrity="sha512-UuQ/zJlbMVAw/UU8vVBhnI4op+/tFOpQZVT+FormmIEhRSCnJWyHiBbEVgM4Uztsht41f3FzVWgLuwzUqOObKw==" crossorigin="anonymous" referrerpolicy="no-referrer" />'
);
$('head').append(
  '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/solid.min.css" integrity="sha512-Hp+WwK4QdKZk9/W0ViDvLunYjFrGJmNDt6sCflZNkjgvNq9mY+0tMbd6tWMiAlcf1OQyqL4gn2rYp7UsfssZPA==" crossorigin="anonymous" referrerpolicy="no-referrer" />'
);

$('head').append(
  `
<style>
div.stylebutton {
    padding: 0px 7px 0px 7px;
    min-width: 13px;
    height: 27px;
    border: 1px solid #1B7C1F;
    color: #04FC3E;
    float: left;
    cursor: pointer;
    font-size: 13px;
    line-height: 27px;
}

div.stylebuttonico {
    padding: 4px 7px 0px 7px;
    height: 23px;
    border: 1px solid #1B7C1F;
    color: #04FC3E;
    float: left;
    cursor: pointer;
    font-size: 18px;
    line-height: 27px;
}
</style>`
);

/**
 * Replace value with another text
 * @param {string} value
 * @returns {string}
 */
function selectionReplacer(value) {}

/**
 * Replace selected text (or paste text at cursor) in `txtarea`
 * @param {HTMLTextAreaElement} txtarea
 * @param {selectionReplacer} selectionReplacer
 */
function replaceText(txtarea, selectionReplacer, start, end) {
  const scrollPos = txtarea.scrollTop;
  const strPos = start ?? txtarea.selectionStart;
  const endPos = end ?? txtarea.selectionEnd;
  const front = txtarea.value.substring(0, strPos);
  const back = txtarea.value.substring(endPos, txtarea.value.length);
  const text = selectionReplacer(txtarea.value.substring(strPos, endPos));
  txtarea.value = front + text + back;

  txtarea.selectionStart = strPos + text.length;
  txtarea.selectionEnd = strPos + text.length;
  txtarea.focus();
  txtarea.scrollTop = scrollPos;
}

const buttons = [];
buttons.push({
  title: 'Тег переноса строки',
  icon: 'fa-level-down-alt',
  onclick: (target) =>
    replaceText(
      target,
      () => '<br>',
      target.selectionStart,
      target.selectionStart
    ),
});
buttons.push({
  title: 'Жирный текст',
  icon: 'fa-bold',
  template: '<b>$selection</b>',
});
buttons.push({
  title: 'Желтый текст курсивом',
  icon: 'fa-italic',
  template: '<i style="color: yellow;">$selection</i>',
});

buttons.push({
  title: 'Зачеркнутый текст',
  icon: 'fa-strikethrough',
  template: '<del>$selection</del>',
});
buttons.push({
  title: 'Ссылка',
  icon: 'fa-sign-out-alt',
  template: '<a href="$selection">ТЕКСТ</a>',
});
buttons.push({
  title: 'Выравнивание по центру',
  icon: 'fa-align-center',
  template: '<p style="color:yellow; text-align: center;">$selection</p>',
});
buttons.push({
  title: 'Выравнивание правому краю',
  icon: 'fa-align-right',
  template: '<p style="color:yellow; text-align: center;">$selection</p>',
});
buttons.push({
  title: 'Выравнивание по ширине',
  icon: 'fa-align-justify',
  template: '<p style="color:yellow; text-align: center;">$selection</p>',
});
buttons.push({
  title: 'Спойлер',
  icon: 'fa-angle-double-down',
  template:
    '<style>summary {color: yellow; border: none; text-decoration: none; outline: 0px; font-weight: bold;cursor: pointer; margin: 8px 0px 8px -17px;} details {margin: 0px 0px 0px 17px;}</style>\n\n<details><summary> ЗАГОЛОВОК </summary> $selection </details>',
});
buttons.push({
  title: 'Цитирование с разделителями',
  icon: 'fa-quote-left',
  template: '<hr><blockquote> $selection </blockquote><hr>',
});
buttons.push({
  title: 'Изображение в виде ссылки',
  icon: 'fa-images',
  template: '<a href="$selection" target="_blank"><img src="$selection"></a>',
});
buttons.push({
  title: 'Изображение',
  icon: 'fa-image',
  template: '<img src="$selection">',
});
buttons.push({
  title: 'Теги для вставки видео',
  icon: 'fa-video',
  emptyPlaceholder: 'ССЫЛКА НА ВИДЕО.webm',
  template: `<p style="text-align: justify"><span style="color: #FF9933"><b>Название</b></span>
<video width="640" height="360" src="$selection" controls autobuffer>

<p>Если видео не воспроизводится, скачайте его по ссылке: <a href="$selection">Download</a> (РАЗМЕР Mb)</p> </video></p>`,
});
buttons.push({
  title: 'Теги для вставки аудио',
  icon: 'fa-music',
  emptyPlaceholder: 'ССЫЛКА НА МУЗЫКУ.mp3',
  template: `<audio controls><source src="$selection" type="audio/mp3">
Тег audio не поддерживается вашим браузером. <a href="$selection">Скачайте музыку</a></audio>`,
});
buttons.push({
  title: 'Красный, предупредительный текст',
  icon: 'fa-exclamation-triangle',
  template: '<p style="color:red;"><b>ВНИМАНИЕ!</b> $selection </p>',
});
buttons.push({
  title: 'Координаты',
  icon: 'fa-map-marker-alt',
  template: '<a href="geo:$selection;">$selection</a>',
});
buttons.push({
  title: 'Форма ответа',
  content: 'ФО',
  template: '<span style="color: yellow;"><b>ФО:</b> $selection </span>',
});
buttons.push({
  title: 'Пример ответа',
  content: 'Пример',
  template: '<span style="color: yellow;"><b>Пример:</b> $selection </span>',
});

const colors = [
  ['#FFFFFF', 'Белый'],
  ['#00FF00', 'Лайм'],
  ['#008000', 'Зеленый'],
  ['#FF0000', 'Красный'],
  ['#FF1493', 'Пурпурно-розовый'],
  ['#FFFF00', 'Желтый'],
  ['#FFA500', 'Оранжевый'],
  ['#0000FF', 'Синий'],
  ['#800080', 'Пурпурный'],
  ['#FF00FF', 'Фуксия'],
  ['#00FFFF', 'Аква'],
];
const colorButtons = colors.map((x) => ({
  title: x[1],
  content: `<span style="color: ${x[0]}">#</span>`,
  template: `<span style="color: ${x[0]}">$selection</span>`,
}));

const author = {
  title: 'Info',
  icon: 'fa-info',
  onclick: () =>
    alert(`EnEditPanel ${version} - панель редактирования заданий игрового движка Encounter.

Предложения по улучшению и расширению функционала панели пишем: ТГ: @free_md

© 2019 Viruss / arena.en.cx`),
};

// for each textarea attach toolbar
$('div.enPnl1 > textarea.textarea_blank').each((_, textarea) => {
  const content = [...buttons, ...colorButtons, author].map((x) => {
    const button = document.createElement('div');
    button.type = 'button';
    button.title = x.title;
    button.className = x.content ? 'stylebutton' : 'stylebuttonico';
    const content = x.content ?? `<i class="fas ${x.icon}"></i>`;
    button.innerHTML = content;
    button.onclick = x.onclick
      ? () => x.onclick(textarea)
      : () =>
          replaceText(textarea, (selection) =>
            x.template.replaceAll(
              '$selection',
              selection || (x.emptyPlaceholder ?? 'ТЕКСТ')
            )
          );
    return button;
  });

  const toolbar = document.createElement('div');
  toolbar.class = 'buttonPanel';
  content.forEach((b) => toolbar.appendChild(b));
  // paste before parent 'div' of textarea
  /**
  <td width="100%" valign="top">
    Описание подсказки участнику:
    ---> here <---
    <div class="enPnl1 border_rad3" style="width:100%;">
      <textarea name="txtPenaltyComment" class="textarea_blank" style="width:100%;height:33px;">1</textarea>
    </div>
  </td>
   */
  const parent = textarea.parentNode.parentNode;
  parent.insertBefore(toolbar, textarea.parentNode);
});
