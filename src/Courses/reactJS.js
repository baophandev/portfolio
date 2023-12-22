import React from 'react';
import { useState } from 'react';

const ReactJS = () => {
    const [showForm, setShowForm] = useState(false);


    const handleRegisterClick = () => {
        setShowForm(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };


    return ( 
        <div className="content">
            <article>
                <div className="card mb-3" style={{ maxWidth: '900px' }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src="https://solidstudio.io/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Flofvu8al%2Fproduction%2F39d6cef5649ed5c35b1420198a362baf1bff97a6-1280x939.jpg&w=1080&q=75" className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">ReactJS là gì ?</h5>
                                <p className="card-text">
                                    ReactJS là một opensource được phát triển bởi Facebook, 
                                    ra mắt vào năm 2013, bản thân nó là một thư viện Javascript 
                                    được dùng để để xây dựng các tương tác với các thành phần trên website. 
                                    Một trong những điểm nổi bật nhất của ReactJS đó là việc render dữ liệu 
                                    không chỉ thực hiện được trên tầng Server mà còn ở dưới Client nữa.
                                </p>
                                <em style={{color: '#f1356d'}}>Trang web bạn đang sử dụng được code hoàn toàn bằng ReactJS</em>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card mb-3" style={{ maxWidth: '900px' }}>
                    <div className="row g-0">
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Tại sao phải học ReactJS</h5>
                                <p className="card-text">
                                    <ul  className='text-left'>
                                        <li>Thị trường việc làm lớn</li>
                                        <li>Là 1 Framework nâng cao trả nghiệm người dùng được nhiều ông lớn ưa thích</li>
                                        <li>Nhưng việc học và thành thạo ReactJS không phải là điều dễ</li>
                                        <li>Phù hợp với đa dạng thể loại website</li>
                                        <li>Có thể sử dụng cho cả Mobile application</li>
                                        <li>Thân thiện với SEO, Debug dễ dàng</li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <img src="https://ketoanhcm.vn/wp-content/uploads/2018/12/tai-sao.jpg" className="img-fluid rounded-start" alt="..." />
                        </div>
                    </div>
                </div>
                <div className="card mb-3" style={{ maxWidth: '900px' }}>
                    <div className="row g-0">
                        <div className="">
                            <div className="card-body card-body-detail">
                                <h5 className="card-title">CÁC BẠN SẼ ĐƯỢC HỌC CÁC CÔNG NGHỆ SAU</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content">
                    <div className="card" style={{ width: '12rem' }}>
                        <img src="https://play-lh.googleusercontent.com/RslBy1o2NEBYUdRjQtUqLbN-ZM2hpks1mHPMiHMrpAuLqxeBPcFSAjo65nQHbTA53YYn" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title card-title-detail-course">HTML</h5>
                        </div>
                    </div>
                    <div className="card" style={{ width: '12rem' }}>
                        <img src="https://play-lh.googleusercontent.com/RTAZb9E639F4JBcuBRTPEk9_92I-kaKgBMw4LFxTGhdCQeqWukXh74rTngbQpBVGxqo" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title ">CSS</h5>
                        </div>
                    </div>
                    <div className="card" style={{ width: '12rem' }}>
                        <img src="https://img-c.udemycdn.com/course/750x422/4796962_0f3c_6.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title card-title-detail-course">Javascript</h5>
                        </div>
                    </div>
                    <div className="card" style={{ width: '12rem' }}>
                        <img src="data:image/png;base64,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" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">ReactJS</h5>
                        </div>
                    </div>
                    
                </div>
                <div className="card mb-3" style={{ maxWidth: '900px' }}>
                    <div className="row g-0">
                        <div className="">
                            <div className="card-body card-body-detail">
                                <h5 className="card-title">Chi tiết</h5>
                                <p className="card-text">
                                    <ul  className='text-left'>
                                        <li>Các bạn sẽ được tào đào về: HTML, CSS, JS (Cơ bản)</li>
                                        <li>Trọng tâm khóa học là ReactJS</li>
                                        <li>Học online bằng Google meet</li>
                                        <li>Bài giảng do chính mình biên soạn và dịch từ một số tài liệu tiếng anh</li>
                                        <li>Gía cả phải chăng</li>
                                        <li>Giải đáp mọi câu hỏi 24/7</li>
                                        <li><em>NÓI KHÔNG VỚI HỌC QUA VIDEO</em></li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card mb-3" style={{ maxWidth: '900px' }}>
                    <div className="row g-0">
                        <div className="">
                            <div className="card-body card-body-detail">
                                <h5 className="card-title">Lộ trình học : 12 buổi | 4 tuần</h5>
                                <h5 className="card-title" style={{color: '#f1356d'}}>THỜI GIAN HỌC : 19H,THỨ 2, 4, 6 </h5>
                                <p className="card-text">
                                    <table class="table table-bordered">
                                        <tr>
                                            <td>Tuần 1</td>
                                            <td>Tuần 2</td>
                                            <td>Tuần 3</td>
                                            <td>Tuần 4</td>
                                        </tr>
                                        <tr>
                                            <td>HTML, CSS</td>
                                            <td>JS</td>
                                            <td>ReactJS</td>
                                            <td>ReactJS</td>
                                        </tr>
                                    </table>
                                </p>
                                <h5 className='btn-primary'>HỌC PHÍ 250K | 12 BUỔI | 4 TUẦN</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </article> 
            <button className='register btn-primary' onClick={handleRegisterClick}>
                ĐĂNG KÝ HỌC
            </button>  
            {showForm && (
                <div className='form'>
                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdv-jBTfl-kH1TTY9_RX8_p4dQ3R2_hZpRG7jiOPOjmLW5Z-w/viewform?embedded=true" width="640" height="600" frameborder="0" marginheight="0" marginwidth="0">Đang tải…</iframe>
                    <button onClick={() => {
                         setShowForm(false)
                    }} style={{color: '#f1356d'}}>Đóng</button>
                </div>
            )}
        </div>
    );
}

export default ReactJS;
