import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useScrollToTopOnMount from "../../hook/useScrollToTopOnMount";

const Provisin = () => {
  const navigate = useNavigate();
  useScrollToTopOnMount();
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const userId = localStorage.getItem("userId");
    if (!accessToken && !userId) {
      navigate("/");
    }
  }, []);
  return (
    <>
      <div className="py-[20px] max-w-screen-xl mx-auto text-[14px] md:text-[16px]">
        <div className="text-[28px] font-bold my-3">Điều khoản sử dụng</div>
        <div>
          Website này thuộc quyền sở hữu và quản lý của{" "}
          <b>CÔNG TY CỔ PHẦN THƯƠNG MẠI DƯỢC PHẨM VÀNG</b> Việc quý khách truy
          cập và sử dụng website này có nghĩa là Quý khách đã chấp thuận các
          điều khoản và điều kiện đề ra sau đây
        </div>
        {/* nội dung website */}
        <div className="text-[24px] font-bold my-3">Nội dung website</div>
        <div>
          <div>
            Những nội dung trên website bao gồm thương hiệu, biểu tượng, hình
            ảnh, biểu trưng, hình tượng, phần mềm, văn bản và những nội dung
            khác đều là tài sản chịu sự quản lý của{" "}
            <b>CÔNG TY CỔ PHẦN THƯƠNG MẠI DƯỢC PHẨM VÀNG</b>
          </div>
          <div className="my-3">
            Với tư cách là chủ sở hữu hợp pháp các nội dung được hiển thị trên
            Website, <b>nhathuoc.top</b> có toàn quyền sửa đổi, bổ sung, xóa bất
            kỳ nội dung nào của trang web vào bất kỳ thời điểm nào mà không cần
            thông báo trước.
          </div>
          <div>
            Các nội dung về sản phẩm, dịch vụ hiển thị trên website của{" "}
            <b>nhathuoc.top</b> mang tính chất tham khảo dành cho nội bộ các
            thành viên là các nhà thuốc quầy thuốc đã có tài khoản đăng nhập
            trên hệ thống <b>nhathuoc.top</b> có quyền tạm dừng hoặc ngừng cung
            cấp dịch vụ qua website.
          </div>
          <div className="my-3">
            Không ai được thay đổi, xóa, giả mạo, sao chép, tiết lộ, di chuyển,
            sử dụng trái phép bất kỳ một phần hoặc toàn bộ những tài liệu này vì
            các mục đích thương mại hay công cộng mà không được{" "}
            <b>nhathuoc.top</b>
            chấp thuận trước bằng văn bản. Việc sử dụng này là hợp pháp nếu đáp
            ứng đầy đủ các tiêu chí sau:
          </div>
          <div>
            (1) Phục vụ cho hoạt động giao dịch với <b>nhathuoc.top</b>
          </div>
          <div className="my-3">
            (2) Khi sử dụng phải trích dẫn nguồn và giữ nguyên đường dẫn đến tài
            liệu gốc, giữa nguyên tính toàn vẹn của thông tin và đảm bảo quyền
            sở hữu trí tuệ của <b>nhathuoc.top</b> đối với các tài sản trí tuệ
            trên website này.
          </div>
        </div>
        {/* tài khoản truy cập */}
        <div className="text-[24px] font-bold my-3">
          Tài khoản truy cập website
        </div>
        <div>
          Các thành viên có trách nhiệm tự quản lý Tài khoản cá nhân và bảo quản
          mật khẩu mà mình đăng ký với <b>nhathuoc.top</b>. Các thông tin trong
          tài khoản truy cập do thành viên tự cung cấp và phải chịu trách nhiệm
          về tính chính xác của các thông tin đã cung cấp.
        </div>
        <div className="my-3">
          Không được phép đưa thông tin tài khoản cho một bên thứ ba.
        </div>
        <div>
          Trong trường hợp quên tài khoản hoặc mật khẩu đăng nhập, bạn có quyền
          yêu cầu <b>nhathuoc.top</b> khôi phục lại các thông tin cho bạn, với
          điều kiện bạn phải khai báo chính xác các thông tin cá nhân như đã
          đăng ký.
        </div>
        <div className="mt-3">
          Trong trường hợp người sử dụng, người đăng ký vi phạm các quy ước nói
          trên hoặc vi phạm các quy định của pháp luật hoặc có những hành vi
          không lành mạnh, không đúng với phương châm hoạt động và làm tổn hại
          đến lợi ích của website và của các thành viên khác, chúng tôi có quyền
          khóa hoặc loại bỏ tài khoản của chủ sở hữu.
        </div>
        {/* quyền thay đổi nội dung điều khoản */}
        <div className="text-[24px] font-bold my-3">
          Quyền thay đổi nội dung điều khoản
        </div>
        <div className="my-3">
          Dựa theo hoàn cảnh, yêu cầu và tình hình thực tế mà{" "}
          <b>nhathuoc.top</b> có thể sửa đổi, thay thế, thêm vào hoặc bỏ bớt đi
          một phân nào đó của các điều khoản mà không cần thông báo trước. Điều
          khoản sẽ được cập nhật và có hiệu lực tức thời ngay khi được cập nhật
          trên website. Do đó, bạn cần phải xem lại nội dung một cách thường
          xuyên để luôn cập nhật được những thông tin đầy đủ nhất.
        </div>
        {/* quyền sở hữu trí tuệ */}
        <div className="text-[24px] font-bold my-3">Quyền sở hữu trí tuệ</div>
        <div>
          Tất cả các tài nguyên trong website thuộc quyền sở hữu của{" "}
          <b>CÔNG TY CỔ PHẦN THƯƠNG MẠI DƯỢC PHẨM VÀNG</b> và được bảo vệ bởi
          Luật Sở hữu trí tuệ bao gồm các vấn đề liên quan tới bản quyền, nhãn
          hiệu, sáng chế và các đối tượng khác.
        </div>
        <div className="my-3">
          Website đã được đăng ký bảo hộ quyền tác giả tại Cục Bản Quyền Tác
          giả, do đó mọi sự sao chép, phát hành, xuất bản toàn bộ hay một phần
          website và / hoặc tác phẩm có cấu trúc tương tự được xem như là đã vi
          phạm quyền sở hữu trí tuệ và xâm phạm quyền tác giả.
        </div>
      </div>
    </>
  );
};

export default Provisin;
