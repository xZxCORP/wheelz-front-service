type CarImage = {
  make: string;
  year: string;
  model: string;
  color: string;
};
export const createCarImage = (car: CarImage, angle?: string) => {
  const { make, year, model, color } = car;
  const url = new URL('https://cdn.imagin.studio/getimage');

  url.searchParams.append('customer', 'hrjavascript-mastery');
  url.searchParams.append('zoomType', 'fullscreen');
  url.searchParams.append('paintdescription', color);
  url.searchParams.append('modelFamily', model);
  url.searchParams.append('make', make);
  url.searchParams.append('modelYear', `${year}`);
  url.searchParams.append('angle', `${angle}`);

  return url;
};
