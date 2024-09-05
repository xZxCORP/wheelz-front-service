import { useRef } from 'react';
import Lottie from 'react-lottie-player/dist/LottiePlayerLight';

/**
 * Load icon
 *
 * @param size Value equals to width and height. Default 80px
 * @returns
 */
const LoadingAnimation = ({
  className,
  size = 80,
  rgba = { r: 165, g: 153, b: 227, a: 1 },
}: {
  className?: string;
  size?: number;
  rgba?: { r: number; g: number; b: number; a: number };
}) => {
  const lottieReference = useRef(
    <Lottie
      loop
      animationData={lottie(rgba)}
      play
      style={className ? undefined : { height: size, width: size }}
      className={className}
    />
  );
  return lottieReference.current;
};

export default LoadingAnimation;

const lottie = ({ r = 165, g = 153, b = 227, a = 1 }) => {
  return {
    v: '5.5.7',
    meta: { g: 'LottieFiles AE 0.1.20', a: '', k: '', d: '', tc: '' },
    fr: 60,
    ip: 0,
    op: 90,
    w: 200,
    h: 200,
    nm: 'Comp 1',
    ddd: 0,
    assets: [],
    fonts: {
      list: [
        {
          fName: 'Poppins-SemiBold',
          fFamily: 'Poppins',
          fStyle: 'SemiBold',
          ascent: 73.999_023_437_5,
        },
      ],
    },
    layers: [
      {
        ddd: 0,
        ind: 1,
        ty: 5,
        nm: 'Please wait...',
        sr: 1,
        ks: {
          o: { a: 0, k: 100, ix: 11 },
          r: { a: 0, k: 0, ix: 10 },
          p: { a: 0, k: [100.000_000_000_000_03, 100.000_000_000_000_03, 0], ix: 2 },
          a: { a: 0, k: [-133.378, -15.86, 0], ix: 1 },
          s: { a: 0, k: [36.363_636_363_636_37, 36.363_636_363_636_37, 100], ix: 6 },
        },
        ao: 0,
        t: {
          d: {
            k: [
              {
                s: {
                  s: 40,
                  f: 'Poppins-SemiBold',
                  t: '',
                  j: 1,
                  tr: 0,
                  lh: 48,
                  ls: 0,
                  fc: [0, 0.706, 1],
                },
                t: 0,
              },
            ],
          },
          p: {},
          m: { g: 1, a: { a: 0, k: [0, 0], ix: 2 } },
          a: [],
        },
        ip: 0,
        op: 94.000_003_828_698_5,
        st: 0,
        bm: 0,
      },
      {
        ddd: 0,
        ind: 2,
        ty: 4,
        nm: 'Shape Layer 1',
        sr: 1,
        ks: {
          o: { a: 0, k: 100, ix: 11 },
          r: { a: 0, k: 0, ix: 10 },
          p: { a: 0, k: [100.000_000_000_000_03, 100.000_000_000_000_03, 0], ix: 2 },
          a: { a: 0, k: [0, 0, 0], ix: 1 },
          s: { a: 0, k: [36.363_636_363_636_37, 36.363_636_363_636_37, 100], ix: 6 },
        },
        ao: 0,
        shapes: [
          {
            ty: 'gr',
            it: [
              {
                d: 1,
                ty: 'el',
                s: { a: 0, k: [460, 460], ix: 2 },
                p: { a: 0, k: [0, 0], ix: 3 },
                nm: 'Ellipse Path 1',
                mn: 'ADBE Vector Shape - Ellipse',
                hd: false,
              },
              {
                ty: 'st',
                c: { a: 0, k: [r / 255, g / 255, b / 255, a], ix: 3 },
                o: { a: 0, k: 100, ix: 4 },
                w: {
                  a: 1,
                  k: [
                    { i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 0, s: [71] },
                    { i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 47, s: [15] },
                    { t: 93.000_003_787_967_6, s: [71] },
                  ],
                  ix: 5,
                },
                lc: 2,
                lj: 1,
                ml: 4,
                bm: 0,
                nm: 'Stroke 1',
                mn: 'ADBE Vector Graphic - Stroke',
                hd: false,
              },
              {
                ty: 'tr',
                p: { a: 0, k: [0, 0], ix: 2 },
                a: { a: 0, k: [0, 0], ix: 1 },
                s: { a: 0, k: [100, 100], ix: 3 },
                r: { a: 0, k: 0, ix: 6 },
                o: { a: 0, k: 100, ix: 7 },
                sk: { a: 0, k: 0, ix: 4 },
                sa: { a: 0, k: 0, ix: 5 },
                nm: 'Transform',
              },
            ],
            nm: 'Ellipse 1',
            np: 2,
            cix: 2,
            bm: 0,
            ix: 1,
            mn: 'ADBE Vector Group',
            hd: false,
          },
          {
            ty: 'tm',
            s: {
              a: 1,
              k: [
                { i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 31, s: [0] },
                { t: 93.000_003_787_967_6, s: [100] },
              ],
              ix: 1,
            },
            e: {
              a: 1,
              k: [
                { i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 0, s: [0] },
                { t: 71.000_002_891_889_3, s: [100] },
              ],
              ix: 2,
            },
            o: {
              a: 1,
              k: [
                { i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 0, s: [0] },
                { t: 93.000_003_787_967_6, s: [360] },
              ],
              ix: 3,
            },
            m: 1,
            ix: 2,
            nm: 'Trim Paths 1',
            mn: 'ADBE Vector Filter - Trim',
            hd: false,
          },
        ],
        ip: 0,
        op: 94.000_003_828_698_5,
        st: 0,
        bm: 0,
      },
    ],
    markers: [],
    chars: [
      {
        ch: 'P',
        size: 40,
        style: 'SemiBold',
        w: 60.8,
        data: {
          shapes: [
            {
              ty: 'gr',
              it: [
                {
                  ind: 0,
                  ty: 'sh',
                  ix: 1,
                  ks: {
                    a: 0,
                    k: {
                      i: [
                        [0, 3.734],
                        [1.9, 3.267],
                        [3.8, 1.867],
                        [5.4, 0],
                        [0, 0],
                        [0, 0],
                        [0, 0],
                        [0, 0],
                        [0, 0],
                        [-3.767, 2],
                        [-1.767, 3.267],
                      ],
                      o: [
                        [0, -4.133],
                        [-1.9, -3.266],
                        [-3.8, -1.866],
                        [0, 0],
                        [0, 0],
                        [0, 0],
                        [0, 0],
                        [0, 0],
                        [5.733, 0],
                        [3.766, -2],
                        [1.766, -3.266],
                      ],
                      v: [
                        [57.8, -48.2],
                        [54.95, -59.3],
                        [46.4, -67],
                        [32.6, -69.8],
                        [6.9, -69.8],
                        [6.9, 0],
                        [20.9, 0],
                        [20.9, -26.8],
                        [32.6, -26.8],
                        [46.85, -29.8],
                        [55.15, -37.7],
                      ],
                      c: true,
                    },
                    ix: 2,
                  },
                  nm: 'P',
                  mn: 'ADBE Vector Shape - Group',
                  hd: false,
                },
                {
                  ind: 1,
                  ty: 'sh',
                  ix: 2,
                  ks: {
                    a: 0,
                    k: {
                      i: [
                        [3.866, 0],
                        [0, 0],
                        [0, 0],
                        [0, 0],
                        [0, -6.8],
                        [1.866, -1.766],
                      ],
                      o: [
                        [0, 0],
                        [0, 0],
                        [0, 0],
                        [7.6, 0],
                        [0, 3.2],
                        [-1.867, 1.767],
                      ],
                      v: [
                        [32, -38.1],
                        [20.9, -38.1],
                        [20.9, -58.4],
                        [32, -58.4],
                        [43.4, -48.2],
                        [40.6, -40.75],
                      ],
                      c: true,
                    },
                    ix: 2,
                  },
                  nm: 'P',
                  mn: 'ADBE Vector Shape - Group',
                  hd: false,
                },
              ],
              nm: 'P',
              np: 5,
              cix: 2,
              bm: 0,
              ix: 1,
              mn: 'ADBE Vector Group',
              hd: false,
            },
          ],
        },
        fFamily: 'Poppins',
      },
      {
        ch: 'l',
        size: 40,
        style: 'SemiBold',
        w: 27.8,
        data: {
          shapes: [
            {
              ty: 'gr',
              it: [
                {
                  ind: 0,
                  ty: 'sh',
                  ix: 1,
                  ks: {
                    a: 0,
                    k: {
                      i: [
                        [0, 0],
                        [0, 0],
                        [0, 0],
                        [0, 0],
                      ],
                      o: [
                        [0, 0],
                        [0, 0],
                        [0, 0],
                        [0, 0],
                      ],
                      v: [
                        [6.9, -74],
                        [6.9, 0],
                        [20.9, 0],
                        [20.9, -74],
                      ],
                      c: true,
                    },
                    ix: 2,
                  },
                  nm: 'l',
                  mn: 'ADBE Vector Shape - Group',
                  hd: false,
                },
              ],
              nm: 'l',
              np: 3,
              cix: 2,
              bm: 0,
              ix: 1,
              mn: 'ADBE Vector Group',
              hd: false,
            },
          ],
        },
        fFamily: 'Poppins',
      },
      {
        ch: 'e',
        size: 40,
        style: 'SemiBold',
        w: 61.7,
        data: {
          shapes: [
            {
              ty: 'gr',
              it: [
                {
                  ind: 0,
                  ty: 'sh',
                  ix: 1,
                  ks: {
                    a: 0,
                    k: {
                      i: [
                        [0, 2],
                        [2.3, 4.167],
                        [4.166, 2.267],
                        [5.266, 0],
                        [4.2, -2.333],
                        [2.333, -4.333],
                        [0, -5.733],
                        [-2.367, -4.333],
                        [-4.234, -2.366],
                        [-5.334, 0],
                        [-4.534, 3.434],
                        [-1.6, 5.334],
                        [0, 0],
                        [5.2, 0],
                        [2.466, 2.267],
                        [0.333, 4],
                        [0, 0],
                      ],
                      o: [
                        [0, -5.4],
                        [-2.3, -4.166],
                        [-4.167, -2.266],
                        [-5.467, 0],
                        [-4.2, 2.334],
                        [-2.334, 4.334],
                        [0, 5.667],
                        [2.366, 4.334],
                        [4.233, 2.367],
                        [6.6, 0],
                        [4.533, -3.433],
                        [0, 0],
                        [-2.2, 4.467],
                        [-3.6, 0],
                        [-2.467, -2.266],
                        [0, 0],
                        [0.266, -1.6],
                      ],
                      v: [
                        [58.4, -28.9],
                        [54.95, -43.25],
                        [45.25, -52.9],
                        [31.1, -56.3],
                        [16.6, -52.8],
                        [6.8, -42.8],
                        [3.3, -27.7],
                        [6.85, -12.7],
                        [16.75, -2.65],
                        [31.1, 0.9],
                        [47.8, -4.25],
                        [57, -17.4],
                        [41.9, -17.4],
                        [30.8, -10.7],
                        [21.7, -14.1],
                        [17.5, -23.5],
                        [58, -23.5],
                      ],
                      c: true,
                    },
                    ix: 2,
                  },
                  nm: 'e',
                  mn: 'ADBE Vector Shape - Group',
                  hd: false,
                },
                {
                  ind: 1,
                  ty: 'sh',
                  ix: 2,
                  ks: {
                    a: 0,
                    k: {
                      i: [
                        [0, 0],
                        [-2.367, 2.1],
                        [-3.467, 0],
                        [-2.534, -2.166],
                        [-0.067, -3.6],
                      ],
                      o: [
                        [0.533, -3.733],
                        [2.366, -2.1],
                        [3.666, 0],
                        [2.533, 2.167],
                        [0, 0],
                      ],
                      v: [
                        [17.6, -32.9],
                        [21.95, -41.65],
                        [30.7, -44.8],
                        [40, -41.55],
                        [43.9, -32.9],
                      ],
                      c: true,
                    },
                    ix: 2,
                  },
                  nm: 'e',
                  mn: 'ADBE Vector Shape - Group',
                  hd: false,
                },
              ],
              nm: 'e',
              np: 5,
              cix: 2,
              bm: 0,
              ix: 1,
              mn: 'ADBE Vector Group',
              hd: false,
            },
          ],
        },
        fFamily: 'Poppins',
      },
      {
        ch: 'a',
        size: 40,
        style: 'SemiBold',
        w: 67.8,
        data: {
          shapes: [
            {
              ty: 'gr',
              it: [
                {
                  ind: 0,
                  ty: 'sh',
                  ix: 1,
                  ks: {
                    a: 0,
                    k: {
                      i: [
                        [0, -5.6],
                        [-2.234, -4.366],
                        [-3.834, -2.4],
                        [-4.667, 0],
                        [-3.167, 1.7],
                        [-1.8, 2.6],
                        [0, 0],
                        [0, 0],
                        [0, 0],
                        [0, 0],
                        [0, 0],
                        [3.1, 1.667],
                        [4.133, 0],
                        [3.833, -2.333],
                        [2.233, -4.333],
                      ],
                      o: [
                        [0, 5.667],
                        [2.233, 4.367],
                        [3.833, 2.4],
                        [4.133, 0],
                        [3.166, -1.7],
                        [0, 0],
                        [0, 0],
                        [0, 0],
                        [0, 0],
                        [0, 0],
                        [-1.867, -2.533],
                        [-3.1, -1.666],
                        [-4.734, 0],
                        [-3.834, 2.334],
                        [-2.234, 4.334],
                      ],
                      v: [
                        [3.3, -27.9],
                        [6.65, -12.85],
                        [15.75, -2.7],
                        [28.5, 0.9],
                        [39.45, -1.65],
                        [46.9, -8.1],
                        [46.9, 0],
                        [61, 0],
                        [61, -55.4],
                        [46.9, -55.4],
                        [46.9, -47.5],
                        [39.45, -53.8],
                        [28.6, -56.3],
                        [15.75, -52.8],
                        [6.65, -42.8],
                      ],
                      c: true,
                    },
                    ix: 2,
                  },
                  nm: 'a',
                  mn: 'ADBE Vector Shape - Group',
                  hd: false,
                },
                {
                  ind: 1,
                  ty: 'sh',
                  ix: 2,
                  ks: {
                    a: 0,
                    k: {
                      i: [
                        [0, -3.4],
                        [1.333, -2.433],
                        [2.266, -1.3],
                        [2.6, 0],
                        [2.233, 1.334],
                        [1.366, 2.5],
                        [0, 3.334],
                        [-1.367, 2.434],
                        [-2.2, 1.267],
                        [-2.6, 0],
                        [-2.267, -1.3],
                        [-1.334, -2.433],
                      ],
                      o: [
                        [0, 3.4],
                        [-1.334, 2.434],
                        [-2.267, 1.3],
                        [-2.534, 0],
                        [-2.234, -1.333],
                        [-1.367, -2.5],
                        [0, -3.333],
                        [1.366, -2.433],
                        [2.2, -1.266],
                        [2.6, 0],
                        [2.266, 1.3],
                        [1.333, 2.434],
                      ],
                      v: [
                        [46.9, -27.7],
                        [44.9, -18.95],
                        [39.5, -13.35],
                        [32.2, -11.4],
                        [25.05, -13.4],
                        [19.65, -19.15],
                        [17.6, -27.9],
                        [19.65, -36.55],
                        [25, -42.1],
                        [32.2, -44],
                        [39.5, -42.05],
                        [44.9, -36.45],
                      ],
                      c: true,
                    },
                    ix: 2,
                  },
                  nm: 'a',
                  mn: 'ADBE Vector Shape - Group',
                  hd: false,
                },
              ],
              nm: 'a',
              np: 5,
              cix: 2,
              bm: 0,
              ix: 1,
              mn: 'ADBE Vector Group',
              hd: false,
            },
          ],
        },
        fFamily: 'Poppins',
      },
      {
        ch: 's',
        size: 40,
        style: 'SemiBold',
        w: 54.5,
        data: {
          shapes: [
            {
              ty: 'gr',
              it: [
                {
                  ind: 0,
                  ty: 'sh',
                  ix: 1,
                  ks: {
                    a: 0,
                    k: {
                      i: [
                        [-4.534, 0],
                        [-3.3, 1.433],
                        [-1.767, 2.534],
                        [0, 3.2],
                        [1.9, 2.234],
                        [2.6, 1.067],
                        [4, 1],
                        [1.866, 0.967],
                        [0, 1.867],
                        [-1.367, 0.934],
                        [-2.534, 0],
                        [-1.634, -1.3],
                        [-0.2, -2.2],
                        [0, 0],
                        [3.933, 3.3],
                        [6.6, 0],
                        [3.3, -1.466],
                        [1.766, -2.533],
                        [0, -3.066],
                        [-1.9, -2.2],
                        [-2.634, -1.066],
                        [-4.134, -1],
                        [-1.834, -0.9],
                        [0, -1.8],
                        [1.5, -1.066],
                        [2.666, 0],
                        [1.833, 1.4],
                        [0.266, 2.134],
                        [0, 0],
                        [-2.1, -2.8],
                        [-3.6, -1.633],
                      ],
                      o: [
                        [4.4, 0],
                        [3.3, -1.433],
                        [1.766, -2.533],
                        [-0.067, -3.666],
                        [-1.9, -2.233],
                        [-2.6, -1.066],
                        [-3.934, -1],
                        [-1.867, -0.966],
                        [0, -1.666],
                        [1.366, -0.933],
                        [2.733, 0],
                        [1.633, 1.3],
                        [0, 0],
                        [-0.4, -5.6],
                        [-3.934, -3.3],
                        [-4.467, 0],
                        [-3.3, 1.467],
                        [-1.767, 2.534],
                        [0, 3.734],
                        [1.9, 2.2],
                        [2.633, 1.067],
                        [4, 1.067],
                        [1.833, 0.9],
                        [0, 1.667],
                        [-1.5, 1.067],
                        [-2.734, 0],
                        [-1.834, -1.4],
                        [0, 0],
                        [0.2, 3.4],
                        [2.1, 2.8],
                        [3.6, 1.633],
                      ],
                      v: [
                        [28.1, 0.9],
                        [39.65, -1.25],
                        [47.25, -7.2],
                        [49.9, -15.8],
                        [46.95, -24.65],
                        [40.2, -29.6],
                        [30.3, -32.7],
                        [21.6, -35.65],
                        [18.8, -39.9],
                        [20.85, -43.8],
                        [26.7, -45.2],
                        [33.25, -43.25],
                        [36, -38],
                        [49.4, -38],
                        [42.9, -51.35],
                        [27.1, -56.3],
                        [15.45, -54.1],
                        [7.85, -48.1],
                        [5.2, -39.7],
                        [8.05, -30.8],
                        [14.85, -25.9],
                        [25, -22.8],
                        [33.75, -19.85],
                        [36.5, -15.8],
                        [34.25, -11.7],
                        [28, -10.1],
                        [21.15, -12.2],
                        [18, -17.5],
                        [3.9, -17.5],
                        [7.35, -8.2],
                        [15.9, -1.55],
                      ],
                      c: true,
                    },
                    ix: 2,
                  },
                  nm: 's',
                  mn: 'ADBE Vector Shape - Group',
                  hd: false,
                },
              ],
              nm: 's',
              np: 3,
              cix: 2,
              bm: 0,
              ix: 1,
              mn: 'ADBE Vector Group',
              hd: false,
            },
          ],
        },
        fFamily: 'Poppins',
      },
      { ch: ' ', size: 40, style: 'SemiBold', w: 23.8, data: {}, fFamily: 'Poppins' },
      {
        ch: 'w',
        size: 40,
        style: 'SemiBold',
        w: 84.4,
        data: {
          shapes: [
            {
              ty: 'gr',
              it: [
                {
                  ind: 0,
                  ty: 'sh',
                  ix: 1,
                  ks: {
                    a: 0,
                    k: {
                      i: [
                        [0, 0],
                        [0, 0],
                        [0, 0],
                        [0, 0],
                        [0, 0],
                        [0, 0],
                        [0, 0],
                        [0, 0],
                        [0, 0],
                        [0, 0],
                        [0, 0],
                        [0, 0],
                        [0, 0],
                      ],
                      o: [
                        [0, 0],
                        [0, 0],
                        [0, 0],
                        [0, 0],
                        [0, 0],
                        [0, 0],
                        [0, 0],
                        [0, 0],
                        [0, 0],
                        [0, 0],
                        [0, 0],
                        [0, 0],
                        [0, 0],
                      ],
                      v: [
                        [70.3, -55.4],
                        [60.5, -13.3],
                        [50.1, -55.4],
                        [35.3, -55.4],
                        [24.7, -13.2],
                        [14.9, -55.4],
                        [0.7, -55.4],
                        [17, 0],
                        [32.2, 0],
                        [42.3, -38.7],
                        [52.4, 0],
                        [67.5, 0],
                        [83.7, -55.4],
                      ],
                      c: true,
                    },
                    ix: 2,
                  },
                  nm: 'w',
                  mn: 'ADBE Vector Shape - Group',
                  hd: false,
                },
              ],
              nm: 'w',
              np: 3,
              cix: 2,
              bm: 0,
              ix: 1,
              mn: 'ADBE Vector Group',
              hd: false,
            },
          ],
        },
        fFamily: 'Poppins',
      },
      {
        ch: 'i',
        size: 40,
        style: 'SemiBold',
        w: 27.8,
        data: {
          shapes: [
            {
              ty: 'gr',
              it: [
                {
                  ind: 0,
                  ty: 'sh',
                  ix: 1,
                  ks: {
                    a: 0,
                    k: {
                      i: [
                        [-2.467, 0],
                        [-1.634, 1.567],
                        [0, 2.334],
                        [1.633, 1.567],
                        [2.466, 0],
                        [1.633, -1.566],
                        [0, -2.333],
                        [-1.634, -1.566],
                      ],
                      o: [
                        [2.466, 0],
                        [1.633, -1.566],
                        [0, -2.333],
                        [-1.634, -1.566],
                        [-2.467, 0],
                        [-1.634, 1.567],
                        [0, 2.334],
                        [1.633, 1.567],
                      ],
                      v: [
                        [14, -62],
                        [20.15, -64.35],
                        [22.6, -70.2],
                        [20.15, -76.05],
                        [14, -78.4],
                        [7.85, -76.05],
                        [5.4, -70.2],
                        [7.85, -64.35],
                      ],
                      c: true,
                    },
                    ix: 2,
                  },
                  nm: 'i',
                  mn: 'ADBE Vector Shape - Group',
                  hd: false,
                },
                {
                  ind: 1,
                  ty: 'sh',
                  ix: 2,
                  ks: {
                    a: 0,
                    k: {
                      i: [
                        [0, 0],
                        [0, 0],
                        [0, 0],
                        [0, 0],
                      ],
                      o: [
                        [0, 0],
                        [0, 0],
                        [0, 0],
                        [0, 0],
                      ],
                      v: [
                        [6.9, -55.4],
                        [6.9, 0],
                        [20.9, 0],
                        [20.9, -55.4],
                      ],
                      c: true,
                    },
                    ix: 2,
                  },
                  nm: 'i',
                  mn: 'ADBE Vector Shape - Group',
                  hd: false,
                },
              ],
              nm: 'i',
              np: 5,
              cix: 2,
              bm: 0,
              ix: 1,
              mn: 'ADBE Vector Group',
              hd: false,
            },
          ],
        },
        fFamily: 'Poppins',
      },
      {
        ch: 't',
        size: 40,
        style: 'SemiBold',
        w: 38.8,
        data: {
          shapes: [
            {
              ty: 'gr',
              it: [
                {
                  ind: 0,
                  ty: 'sh',
                  ix: 1,
                  ks: {
                    a: 0,
                    k: {
                      i: [
                        [0, 0],
                        [0, 0],
                        [0, 0],
                        [0, 0],
                        [0, 0],
                        [0, 0],
                        [0, 0],
                        [0, 0],
                        [0, 0],
                        [0, 0],
                        [-11.8, 0],
                        [0, 0],
                        [0, 0],
                        [0, 0],
                        [0.9, 0.834],
                        [0, 1.867],
                        [0, 0],
                      ],
                      o: [
                        [0, 0],
                        [0, 0],
                        [0, 0],
                        [0, 0],
                        [0, 0],
                        [0, 0],
                        [0, 0],
                        [0, 0],
                        [0, 0],
                        [0, 11.467],
                        [0, 0],
                        [0, 0],
                        [0, 0],
                        [-2.134, 0],
                        [-0.9, -0.833],
                        [0, 0],
                        [0, 0],
                      ],
                      v: [
                        [35.6, -43.9],
                        [35.6, -55.4],
                        [23.2, -55.4],
                        [23.2, -69.1],
                        [9.1, -69.1],
                        [9.1, -55.4],
                        [2.5, -55.4],
                        [2.5, -43.9],
                        [9.1, -43.9],
                        [9.1, -17.2],
                        [26.8, 0],
                        [35.6, 0],
                        [35.6, -11.8],
                        [29.1, -11.8],
                        [24.55, -13.05],
                        [23.2, -17.1],
                        [23.2, -43.9],
                      ],
                      c: true,
                    },
                    ix: 2,
                  },
                  nm: 't',
                  mn: 'ADBE Vector Shape - Group',
                  hd: false,
                },
              ],
              nm: 't',
              np: 3,
              cix: 2,
              bm: 0,
              ix: 1,
              mn: 'ADBE Vector Group',
              hd: false,
            },
          ],
        },
        fFamily: 'Poppins',
      },
      {
        ch: '.',
        size: 40,
        style: 'SemiBold',
        w: 26,
        data: {
          shapes: [
            {
              ty: 'gr',
              it: [
                {
                  ind: 0,
                  ty: 'sh',
                  ix: 1,
                  ks: {
                    a: 0,
                    k: {
                      i: [
                        [-2.534, 0],
                        [-1.6, 1.567],
                        [0, 2.334],
                        [1.6, 1.567],
                        [2.466, 0],
                        [1.633, -1.566],
                        [0, -2.333],
                        [-1.634, -1.566],
                      ],
                      o: [
                        [2.466, 0],
                        [1.6, -1.566],
                        [0, -2.333],
                        [-1.6, -1.566],
                        [-2.534, 0],
                        [-1.634, 1.567],
                        [0, 2.334],
                        [1.633, 1.567],
                      ],
                      v: [
                        [13.1, 0.7],
                        [19.2, -1.65],
                        [21.6, -7.5],
                        [19.2, -13.35],
                        [13.1, -15.7],
                        [6.85, -13.35],
                        [4.4, -7.5],
                        [6.85, -1.65],
                      ],
                      c: true,
                    },
                    ix: 2,
                  },
                  nm: '.',
                  mn: 'ADBE Vector Shape - Group',
                  hd: false,
                },
              ],
              nm: '.',
              np: 3,
              cix: 2,
              bm: 0,
              ix: 1,
              mn: 'ADBE Vector Group',
              hd: false,
            },
          ],
        },
        fFamily: 'Poppins',
      },
    ],
  };
};
