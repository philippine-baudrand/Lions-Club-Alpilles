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
        <h1 className="club_title">Club Féminin Paradou les Alpilles</h1>
        <p>Le Lions Club Paradou-Les-Alpilles regroupent dans la convivialité et l'esprit de bonne camaraderie 29 femmes autour des valeurs humanistes du Lionisme</p>
        <img className="picture" src="https://media.discordapp.net/attachments/739121254438666292/782973427295584256/logo_paradou.jpg" alt="lions-woman" />
      </div>
      <div className="paragraph">
        <h1 className="club_title">Qu'est ce que le Lions Club International?</h1>
        Aujourd'hui, le Lions International est la plus grande association internationale de Clubs-Services du monde avec 1,35 million de membres dans 45 000 clubs répartis dans 206 pays, chaque pays disposant d'ailleurs d'une large autonomie qui lui permet de manifester son identité culturelle dans l'Association.
        Initiateur du statut d'ONG, il est présent à titre consultatif auprès le l'ONU, l'UNESCO, l'UNICEF, de l'OMS et du Conseil de l'Europe.
        660 millions de dollars, reversés chaque année dans le monde. 76 millions d'heures de bénévolat.
        En France, 30 000 membres dans 1 250 Clubs, 16 millions d'euros reversés, 1 million d'heures de don de soi.
      </div>
      <div className="paragraph">
        <h1 className="club_title">QUI SONT LES LIONS?</h1>
          Des hommes et des femmes libres qui ont ajouté à leur vie une dimension humaniste et humanitaire. Une devise : "Nous Servons". Leur but : mettre en place des actions humanitaires en venant en aide à ceux qui en ont besoin, localement et dans le monde.
      </div>
      <div className="paragraph">
        <h1 className="club_title">QUELLES SONT LES VALEURS LIONS?</h1>
          Les Lions définissent leurs actions au cours de réunion bi-mensuelles, où ils partagent des valeurs d'amitié et de solidarité, leur diversité socioculturelle permettant à chacun d'élargir sa vision de la société.
      </div>
      <div className="paragraph">
        <h1 className="club_title">QUE FONT LES LIONS?</h1>
          Les Lions visent à l'épanouissement de la personne humaine. Ils développement de multiples opérations locales, nationales et internationales dans le domaine du Savoir, de l'Éducation et de la Culture. Ils favorisent le rapprochement entre les peuples par les échanges de jeunes du monde entier.
          Les Lions apportent leur soutien aux plus démunis. Leurs actions peuvent être mondiales, comme lors de catastrophes naturelles majeures ou pour des programmes en faveur de grandes causes telle que la Lutte contre la Cécité. Au quotidien, elles sont nationales et locales, reflétant l'implication profonde des Lions dans la vie de la cité.
      </div>
      <div className="paragraph">
        <h1 className="club_title">COMMENT SE FINANCENT-ILS?</h1>
          Les Lions financent leurs multiples actions en organisant des opérations menées par eux-mêmes. La totalité des résultats financiers de ces manifestations est affectée à l'oeuvre définie au préalable. Les frais de fonctionnement du Lions Club sont entièrement couverts par les cotisations des Lions.
          Le Lions Clubs International est la plus grande organisation de clubs service dans le monde, avec 1,4 million de membres dans à peu près 46 000 clubs, répartis dans plus de 200 pays et aires géographiques à travers le monde.
      </div>
      <div className="paragraph">
        <h1 className="club_title">Réunions</h1>
        <p>Quand ?</p>
        <p>2ème et 4ème mercredis du mois</p>
        <p>Où ?</p>
        <p>2ème mercredi du mois - réunion statutaire suivi d'un repas - Salle polyvalente de Paradou les Alpilles 4ème mercredi du mois - réunion à la maison des associations d'Arles</p>
      </div>
    </div>
    <Footer />
  </div>
);
export default Club;
