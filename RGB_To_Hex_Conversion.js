//The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a 
//hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. 
//Any values that fall out of that range must be rounded to the closest valid value.
// function that converts integer to hex (rgb)

const rgbToHex = (rgb) => { 
    let hex = Number(rgb).toString(16); 
    if (hex.length < 2) { 
      hex = '0' + hex; 
    } 
    return hex; 
};
// my function rgb for r,g,b
function rgb(r, g, b){
  if(r < 0){ r = 0; }
  if(g < 0){ g = 0; }
  if(b < 0){ b = 0; }
  if(r > 255){ r = 255; }
  if(g > 255){ g = 255; }
  if(b > 255){ b = 255; }
  
  const stringHex = rgbToHex(r).toUpperCase() + rgbToHex(g).toUpperCase() + rgbToHex(b).toUpperCase();
  return stringHex;
}
