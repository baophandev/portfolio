import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Course = ({handleShowCourses}) => {
    
    return ( 
        <div>
            <div className="content">
                <div className="card  outstanding" style={{ width: '18rem' }}>
                    <img src="https://solidstudio.io/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Flofvu8al%2Fproduction%2F39d6cef5649ed5c35b1420198a362baf1bff97a6-1280x939.jpg&w=1080&q=75" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Lập trình Front-end nâng cao với ReactJS</h5>
                        <p className="card-text text-white">
                            Học về ReactJS code những trang web SPA...
                        </p>
                        <p style={{color: '#f1356d', fontWeight: 'bold', fontSize: '20px'}}>250k | Học trong 1 tháng</p>
                        <Link to="/Course/ReactJS" className="btn btn-primary">
                            DETAIL
                        </Link>
                    </div>
                </div>
                <div className="card" style={{ width: '18rem' }}>
                    <Link to=""><img src="/img/Yellow Modern Coming Soon (Facebook Post).png" className="card-img-top" alt="..." /></Link>
                    <div className="card-body">
                        <h5 className="card-title">Full-Stack Course</h5>
                        <p className="card-text text-white">
                            Khóa lập trình Full-Stack với NodeJS, Express,.. 
                        </p>
                        <p style={{color: '#f1356d', fontWeight: 'bold', fontSize: '20px'}}>399K | Học trong 2 tháng</p>
                        <button href="#" className="btn btn-primary" onClick={handleShowCourses}>
                            Comming soon
                        </button>
                    </div>
                </div>
                <div className="card" style={{ width: '18rem' }}>
                    <img src="https://appmaster.io/api/_files/hRaLG2N4DVjRZJQzCpN2zJ/download/" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Lập trình ứng dụng Desktop với Java</h5>
                        <p className="card-text text-white">
                            Với nền tảng OOP bạn có thể làm việc với Java để..
                        </p>
                        <p style={{color: '#f1356d', fontWeight: 'bold', fontSize: '20px'}}>250k | Học trong 1 tháng</p>
                        <button href="#" className="btn btn-primary">
                            Comming soon
                        </button>
                    </div>
                </div>
            </div>
            <div className="content">
                
            </div>
            
        </div>
    );
}
 
export default Course;