export const createMockDocument = () => {
  document.body.innerHTML = `
    <main>
  </main>
  `;
};

export const appendElementToMain = () => {
  const main = document.querySelector('main');
  const newElement = document.createElement('div');
  main.appendChild(newElement);
};

export const removeElementFromMain = () => {
  const main = document.querySelector('main');

  main.removeChild(main.lastChild);
};
