import { data, colors } from "./data.js";
import photosView from "./views/photosView.js";
import middlePhotosView from "./views/middlePhotosView.js";
import collectionView from "./views/collectionView.js";

collectionView.render(data, colors);

const mainResultData = function (id) {
  const mainData = data.find(obj => obj.id === id);
  return mainData;
}

const loadMainResult = function () {
  const id = window.location.hash.slice(1);
  if (!id) return;
  const mainData = mainResultData(id);

  if (!mainData) return;
  photosView.render(mainData);
};

const init = function () {
  collectionView.eventHandler(loadMainResult);
  photosView.eventHandler();

}
init();