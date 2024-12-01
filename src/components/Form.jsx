import { Button, Input, Option, Select } from "@material-tailwind/react";
import { useState } from "react";
import ImgCrop from "./ImgCrop";

const ProfileForm = (props) => {
  const [imgUrl, setImgUrl] = useState(null);
  const [data, setData] = useState({
    prenom: "",
    specialisation: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSelectChange = (value) => {
    setData((prevData) => ({
      ...prevData,
      specialisation: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Données du formulaire :", data);
    window.scrollTo(0, 0, "smooth");
    props.setData({
      ...data,
      imgUrl,
    });
  };

  return (
    <section id="form-section" className="py-16 px-4 min-h-[60vh]">
      <div className="max-w-4xl mx-auto text-center">
        {/* Titre */}
        <h2 className="text-3xl font-bold mb-4">
          Génération de profil DevFest
        </h2>

        {/* Description */}
        <p className="text-lg text-gray-700 mb-8">
          Téléchargez votre photo, ajoutez votre prénom, et choisissez votre
          domaine de spécialisation.
        </p>

        <div className="content flex flex-col items-center">
          {/* Image Cropper */}
          <ImgCrop imgUrl={imgUrl} setImgUrl={setImgUrl} />

          {/* Formulaire de profil */}
          {imgUrl && (
            <div className="flex mt-6 flex-col lg:flex-row lg:items-start bg-white p-8 rounded-lg shadow-md w-full max-w-3xl gap-6">
              {/* Image de profil */}
              <img
                src={imgUrl}
                alt="Profile"
                className="w-40 h-40 lg:w-48 lg:h-48 rounded-full mx-auto lg:mx-0 lg:mr-8"
              />

              {/* Formulaire */}
              <form
                onSubmit={handleSubmit}
                className="flex flex-col items-center lg:items-start w-full lg:w-auto gap-6"
              >
                {/* Champ prénom */}
                <Input
                  label="Prénom"
                  placeholder="Votre prénom"
                  size="lg"
                  color="amber"
                  maxLength={12}
                  className="w-full lg:w-64"
                  name="prenom"
                  value={data.prenom}
                  onChange={handleChange}
                />

                {/* Sélection de spécialisation */}
                <Select
                  label="Domaine de spécialisation"
                  className="w-full lg:w-64"
                  value={data.specialisation}
                  onChange={(value) => handleSelectChange(value)}
                >
                  <Option value="ai">AI/ML</Option>
                  <Option value="mobile">Mobile</Option>
                  <Option value="web">Web</Option>
                  <Option value="cloud">Cloud</Option>
                  <Option value="no">Je ne sais pas encore</Option>
                </Select>

                {/* Bouton de génération */}
                <Button type="submit" color="amber" size="lg" ripple="light">
                  Générer le profil
                </Button>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProfileForm;
