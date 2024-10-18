import React from 'react';
import '../Content/bootstrap.min.css'; // Sesuaikan jalur ke file bootstrap.min.css yang benar
import '../Content/Content.css'

export default function Footer() {
    return (
        <footer>
            <div className="footerA">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-md-6 col-lg-3">
                            <h4 className="footer_taital">NAVIGATION</h4>
                            {/* Tambahkan konten navigation di sini */}
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3">
                            <h4 className="footer_taital">NEWS</h4>
                            {/* Tambahkan konten news di sini */}
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3">
                            <h4 className="footer_taital">ADDRESS</h4>
                            {/* Tambahkan konten address di sini */}
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3">
                            <h4 className="footer_taital">CONTACT</h4>
                            {/* Tambahkan konten contact di sini */}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
