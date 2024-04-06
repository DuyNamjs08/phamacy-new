import Pages from "../page/index";
const TRANG_CHU = "/";
const GIOI_THIEU = "/gioi-thieu";
const LIEN_HE = "/lien-he";
const SAN_PHAM = "/san-pham";
const ORDER = "/don-hang";
const PAYMENT = "/dat-hang-nhanh";
const TIN_TUC = "/tin-tuc";
const TAI_KHOAN = "/tai-khoan";
const DIEU_KHOAN = "/dieu-khoan";

const RouterWeb = [
  {
    id: 1,
    path: TRANG_CHU,
    role: ["1", "2", "3"],
    component: <Pages.HomePage />,
  },
  {
    id: 2,
    path: GIOI_THIEU,
    component: <Pages.IntroPage />,
    role: ["1", "2", "3"],
  },
  {
    id: 23,
    path: TIN_TUC,
    component: <Pages.PostOutlet />,
    role: ["1", "2", "3"],
    child: [
      {
        path: "",
        component: <Pages.Post />,
      },
      {
        path: ":id",
        component: <Pages.PostDetail />,
      },
    ],
  },
  {
    id: 23,
    path: TAI_KHOAN,
    component: <Pages.Account />,
    role: ["1", "2", "3"],
  },
  {
    id: 299,
    path: ORDER,
    component: <Pages.Order />,
    role: ["1", "2", "3"],
  },
  {
    id: 290,
    path: PAYMENT,
    component: <Pages.Payment />,
    role: ["1", "2", "3"],
  },
  {
    id: 3,
    path: SAN_PHAM,
    role: ["1", "2", "3"],
    component: <Pages.ProductOutlet />,
    child: [
      {
        path: "",
        component: <Pages.ProductPage />,
      },
      {
        path: ":id",
        component: <Pages.ProductDetailPage />,
      },
    ],
  },
  { id: 7, role: ["1", "2"], path: LIEN_HE, component: <Pages.ContactPage /> },
  { id: 8, path: DIEU_KHOAN, role: ["1"], component: <Pages.Provisin /> },
];

export default RouterWeb;
