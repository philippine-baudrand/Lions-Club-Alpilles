// == Import npm
import React from 'react';
import './club.scss';
import Footer from '../Footer/footer';
import Header from '../Header/header';

const Club = () => (
  <div>
    <Header />
    <div className="club">
      <div className="paragraph">
        <h2 className="club_title">Club Féminin Paradou les Alpilles</h2>
        <img className="alpilles-logo" src="https://media.discordapp.net/attachments/739121254438666292/782973427295584256/logo_paradou.jpg" alt="lions-woman" />
        <p className="p1-club">Le Lions Club Paradou-Les-Alpilles regroupent dans la convivialité et l'esprit de bonne camaraderie 25 femmes autour des valeurs humanistes du Lions</p>
      </div>
      <div className="paragraph">
        <h2 className="club_title">Qu'est ce que le Lions Club International?</h2>
        <img className="club-logo" src="https://media.discordapp.net/attachments/739121254438666292/783733217298612254/logolions.png" alt="lions-woman" />
        <p>Aujourd'hui, le Lions International est la plus grande association internationale de Clubs-Services du monde avec 1,35 million de membres dans 45 000 clubs répartis dans 206 pays, chaque pays disposant d'ailleurs d'une large autonomie qui lui permet de manifester son identité culturelle dans l'Association.</p>
        <p>Initiateur du statut d'ONG, il est présent à titre consultatif auprès le l'ONU, l'UNESCO, l'UNICEF, de l'OMS et du Conseil de l'Europe.
        660 millions de dollars, reversés chaque année dans le monde. 76 millions d'heures de bénévolat.</p>
        En France, 30 000 membres dans 1 250 Clubs, 16 millions d'euros reversés, 1 million d'heures de don de soi.
      </div>
      <div className="paragraph">
        <h2 className="club_title">Qui sont les Lions?</h2>
          Des hommes et des femmes libres qui ont ajouté à leur vie une dimension humaniste et humanitaire. Une devise : "Nous Servons". Leur but : mettre en place des actions humanitaires en venant en aide à ceux qui en ont besoin, localement et dans le monde.
      </div>
      <div className="paragraph">
        <h2 className="club_title">Quelles sont les valeurs Lions?</h2>
          Les Lions définissent leurs actions au cours de réunion bi-mensuelles, où ils partagent des valeurs d'amitié et de solidarité, leur diversité socioculturelle permettant à chacun d'élargir sa vision de la société.
      </div>
      <div className="paragraph">
        <h2 className="club_title">Que font les Lions?</h2>
          Les Lions visent à l'épanouissement de la personne humaine. Ils développement de multiples opérations locales, nationales et internationales dans le domaine du Savoir, de l'Éducation et de la Culture. Ils favorisent le rapprochement entre les peuples par les échanges de jeunes du monde entier.
          Les Lions apportent leur soutien aux plus démunis. Leurs actions peuvent être mondiales, comme lors de catastrophes naturelles majeures ou pour des programmes en faveur de grandes causes telle que la Lutte contre la Cécité. Au quotidien, elles sont nationales et locales, reflétant l'implication profonde des Lions dans la vie de la cité.
      </div>
      <div className="paragraph">
        <h2 className="club_title">Comment se financent-ils?</h2>
          Les Lions financent leurs multiples actions en organisant des opérations menées par eux-mêmes. La totalité des résultats financiers de ces manifestations est affectée à l'oeuvre définie au préalable. Les frais de fonctionnement du Lions Club sont entièrement couverts par les cotisations des Lions.
          Le Lions Clubs International est la plus grande organisation de clubs service dans le monde, avec 1,4 million de membres dans à peu près 46 000 clubs, répartis dans plus de 200 pays et aires géographiques à travers le monde.
      </div>
      <div className="paragraph">
        <h2 className="club_title">Réunions</h2>
          <div className="image-reunion">
            <img className="reunion" src="https://media.discordapp.net/attachments/739121254438666292/781451832262262804/72481986_1057806044420704_8735123251316916224_n.jpg" alt="lions-woman" />
          </div>
          <div className="text-reunion">
            <h3>Quand ?</h3>
            <p>2ème mercredi du mois</p>
            <p>4ème mardi du mois</p>
            <hr></hr>
            <h3>Où ?</h3>
            <p>2ème mercredi du mois - réunion statutaire suivi d'un repas - Salle polyvalente de Paradou les Alpilles 4ème mardi du mois - réunion à la maison des associations d'Arles</p>
          </div>
      </div>
    </div>
    <Footer />
  </div>
);
export default Club;
