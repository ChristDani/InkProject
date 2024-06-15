const Footer = () => {
  return (
    <>
      <div
        className="min-h-[690px]"
        style={{ backgroundImage: 'URL("src/images/public/bg_footer.svg")' }}
      >
        <div className="w-[1440px] mx-auto">
          <div className="flex gap-4">
            <div>
              <div className="text-white">logo</div>
              <div className="text-white">
                Unete y recibe nuestro boletin informativo
              </div>
            </div>
            <div>
              <div className="text-white">Legales</div>
              <div className="text-white">Descarga la app</div>
            </div>
            <div>
              <div className="text-white">Contacto</div>
              <div className="text-white">Siguenos en</div>
            </div>
          </div>
          <div>
            <input type="text" name="" id="" />
            <button>Suscribete</button>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Footer;
