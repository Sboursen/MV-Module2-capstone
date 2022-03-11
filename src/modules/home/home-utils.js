export const likeClass = 'heart fas fa-heart';
export const unlikeClass = 'heart far fa-heart';
export const carRender = (
  id,
  imgUrl,
  make,
  model,
  likes = 0,
) => `<div
      class="car-card flex flex-col gap-2 border-4 rounded-md border-violet-600" id="${id}">
      <div class="car-img h-50 object-cover">
        <img class="w-full"
          src="${imgUrl}"
          alt="${make.toUpperCase()} ${model.toUpperCase()}">
      </div>
      <div class="car-info flex justify-between p-2 mt-auto">
        <h2>${make.toUpperCase()} ${model.toUpperCase()}</h2>
        <div class="flex flex-col items-center text-red-600">
          <i class="${unlikeClass}"></i>
          <span class="text-black"><span class="likes">${likes}</span> <span>likes</span></span>
        </div>
      </div>
      <div class="car-buttons flex flex-col gap-3 p-2 ">
        <button id="model" class="comment-button px-2 py-1 border-2 hover:border-2 hover:shadow-sm hover:text-white hover:bg-sky-500"
          type="button">Comment</button>
        <button
          class="reservation-button px-2 py-1 border-2 hover:border-2 hover:shadow-sm hover:text-white hover:bg-sky-500"
          type="button">Reservation</button>
      </div>
    </div>`;

export const fileExists = (imageUrl) => {
  const http = new XMLHttpRequest();

  http.open('HEAD', imageUrl, false);
  http.send();

  return Number(http.status) !== 404;
};

export const goodCarsId = [
  1, 5, 7, 8, 11, 12, 14, 15, 16, 17, 18, 19, 20, 21, 25,
  26, 29, 31, 32, 34, 35, 39, 41, 43, 48, 49, 50, 51, 53,
  55, 56, 57, 58, 60, 62, 63, 64, 65, 68, 69, 73, 75, 76,
  79, 83, 84, 85, 86, 87, 88, 90, 95, 98, 100, 101, 102,
  104, 105, 106, 107, 108, 109, 110, 112, 113, 114, 115,
  116, 117, 118, 119, 122, 123, 124, 126, 128, 129, 130,
  133, 134, 139, 141, 143, 144, 145, 146, 147, 148, 149,
  150, 151, 154, 155, 157, 158, 161, 162, 163, 164, 165,
  166, 168, 169, 171, 172, 178, 179, 180, 181, 183, 184,
  185, 188, 189, 192, 194, 196, 197, 198, 199, 200, 203,
  205, 207, 214, 215, 216, 217, 219, 230, 240, 244, 245,
  246, 247, 250, 251, 252, 254, 255, 259, 260, 261, 262,
  263, 271, 273, 274, 277, 278, 281, 282, 283, 284, 285,
  286, 288, 290, 292, 294, 295, 296, 298, 300, 301, 302,
  303, 304, 305, 306, 307, 313, 315, 318, 319, 322, 323,
  324, 325, 326, 327, 329, 330, 332, 333, 335, 336, 337,
  338, 345, 346, 347, 348, 350, 351, 353, 354, 355, 357,
  359, 361, 362, 366, 369, 371,
];
