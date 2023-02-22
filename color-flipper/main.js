import './style.css'

const COLOR_PALETTE = {
  '#D3F9B5': 'Tea Green',
  '#DDFC74': 'Mindaro',
  '#BF6900': "Tiger's Eye",
  '#3D0C11': 'Black Bean',
  '#000000': 'Black',
};

// const colorOptions = Object.keys(COLOR_PALETTE).map((color) => {
//   const option = document.createElement('option');
//   option.value = color;
//   option.innerText = COLOR_PALETTE[color];
// });

// const colorPickerSelect = document.querySelector('#color-picker');
// colorPickerSelect.append(...colorOptions);

const addOptionsToColorPicker = () => {
  const colorPickerSelect = document.querySelector('#color-picker');

  Object.keys(COLOR_PALETTE).forEach((color) => {
    const option = document.createElement('option');
    option.value = color;
    option.innerText = COLOR_PALETTE[color];
  
    colorPickerSelect.append(option);
  });
};

const addEventListenerToColorPicker = () => {
  const colorPickerSelect = document.querySelector('#color-picker');
  const colorName = document.querySelector('#color-name');

  colorPickerSelect.addEventListener('change', (event) => {
    //console.log('Cambio!', event.target.value);
    const newColor = event.target.value;
    document.body.style.backgroundColor = newColor;

    const colorNameText = `${COLOR_PALETTE[newColor]} | ${newColor}`;
    colorName.innerText = COLOR_PALETTE[newColor] ? colorNameText : '-';

  });

};

addOptionsToColorPicker();
addEventListenerToColorPicker();

