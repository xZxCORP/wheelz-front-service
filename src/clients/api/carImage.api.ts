const COLOR_MAPPER: { [key: string]: string } = {
  BLANC: 'white',
  NOIR: 'black',
  BLEU: 'blue',
}

export const createCarImage = (
  car: { make: string; year: string; model: string; color: string },
  angle?: string
) => {
  const { make, year, model, color } = car
  const url = new URL('https://cdn.imagin.studio/getimage')
  const colorMapped =
    color.toUpperCase() in COLOR_MAPPER ? COLOR_MAPPER[color.toUpperCase()] : 'white'

  url.searchParams.append('customer', 'hrjavascript-mastery')
  url.searchParams.append('zoomType', 'fullscreen')
  url.searchParams.append('paintdescription', colorMapped as string)
  url.searchParams.append('modelFamily', model)
  url.searchParams.append('make', make)
  url.searchParams.append('modelYear', `${year}`)
  url.searchParams.append('angle', `${angle}`)

  return `${url}`
}
