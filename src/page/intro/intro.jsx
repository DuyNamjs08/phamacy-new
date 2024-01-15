import BannerHerro from "../../components/bannerHerro/BannerHerro";
import banner from "../../assets/banner/1.png";
const IntroPage = () => {
  return (
    <>
      <BannerHerro img={banner} />
      <div className="p-[20px] max-w-screen-xl mx-auto text-[14px] md:text-[16px]">
        <div className="w-[80%] text-left">
          <h3 className="font-semibold text-2xl mt-4">
            NHÀ THUỐC HAPU – CUNG CẤP THUỐC CHẤT LƯỢNG, UY TÍN, GIÁ TỐT NHẤT
          </h3>
          <p className="mt-4 mb-4">
            Với sự phát triển mạnh mẽ của công nghệ 4.0, thế giới đang phát
            triển rất mạnh mẽ, nghành dược cũng vậy, nhu cầu{" "}
            <b>
              mua thuốc tiện lợi, mua thuốc online, mua thuốc trực tuyến ngay
              tại nhà
            </b>{" "}
            càng tăng lên. Để đáp ứng nhu cầu đó{" "}
            <b>DỊCH VỤ MUA THUỐC TRỰC TUYẾN </b>
            online của <b>Nhà thuốc Hapu</b> ra đời, giúp người dân có thể mua
            bất cứ thuốc nào chỉ bằng cách điện thoại/zalo/ viber qua số hotline
            <a href="">
              <b> 0923.283.003</b>
            </a>
            , quý khách dễ dàng đặt hàng thuốc và được{" "}
            <b>ship đến tận nhà, kiểm tra thuốc trước khi thanh toán tiền.</b>
          </p>
          <p className="mb-4">
            Ngoài các thuốc thông thường hệ thống nhà thuốc chúng tôi có cung
            ứng đầy đủ các loại thuốc chuyên khoa:{" "}
            <b className="text-blue-800">
              Thuốc ung thư, thuốc viêm gan virus, thuốc sinh lý, thuốc bổ nam,
              thuốc bổ cho nữ
            </b>
            , thuốc theo đơn các bệnh viện lớn như Bạch Mai, Việt Đức, Viện K,
            Viện Xanh Pôn, Lão Khoa, 108, 103, Từ Dũ, Chợ Rẫy, Bv 115…
          </p>
          <p className="mb-4">
            Quý khách có nhu cầu mua bất cứ thuốc gì chỉ cần liên hệ tới số
            <b> 0923.283.003 để được Dược sỹ Đại học Dược Hà Nội tư vấn</b>,
            hướng dẫn sử dụng thuốc an toàn hợp lý và miễn phí 24/7.
          </p>
          <p className="mb-4">
            <b>Với trên 25 năm kinh nghiệm trong nghành dược</b>, quý khách có
            thể hoàn toàn tin tưởng ở chúng tôi.
          </p>
          <p className="mb-4">Nhà thuốc hapu có cơ sở ở đâu?</p>
          <p className="mb-4">
            <b>Cơ sở 1: 85 Vũ Trọng Phụng, Thanh Xuân, Hà Nội. (ấn đây)</b>
          </p>
          <p className="mb-4">
            <b>
              {" "}
              Cơ sở 2: Chung cư Bình Thới, Phường 8, Quận 11, TP Hồ Chí Minh.
            </b>
          </p>
          <p className="mb-4">
            Nếu bạn ở tỉnh thành khác, chỉ cần liên hệ số{" "}
            <b>hotline 0923.283.003</b>, chúng tôi có dịch vụ giao thuốc toàn
            quốc cho quý khách qua các đơn vị vận chuyển chuyên nghiệp như
            Viettel post, Bưu Điện VN Post, GHTK, GHN, Supper Ship…
          </p>
          <p className="mb-4">
            <b>Cảm ơn các bạn đã tin tưởng nhathuochapu.vn</b>
          </p>
        </div>
      </div>
    </>
  );
};

export default IntroPage;
