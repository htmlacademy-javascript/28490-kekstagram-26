import { items } from './data.js';
import { renderMimiatures } from './pictures.js';
import { closeBigPictureEscPress, onCloseButtonPress } from './bigPicture.js';

renderMimiatures(items);

onCloseButtonPress();
closeBigPictureEscPress();

