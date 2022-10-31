import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { StaticLayout } from '../components';

const Billing = () => {
  const params = useParams();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [params]);
  return (
    <StaticLayout header='Expédition et facturation'>
      <div className='static__text'>
        <div className='static__text-header'>Politique d'expédition</div>
        <ul className='static__text-list'>
          <li>
            Pour assurer la facilité du processus de livraison et éviter les
            retards de livraison ..Vous devez nous fournir un numéro de
            téléphone valide à travers lequel nous pouvons vous contacter, une
            adresse de livraison claire et détaillée, et l'adresse de livraison
            doit contenir (numéro de bâtiment, de villa ou d'appartement , nom
            de rue, ville et gouvernorat) selon le formulaire présent sur le
            site.
          </li>
          <li>
            Après passation de commande, le délai de livraison des commandes est
            de 4 à 7 jours ouvrables à compter de la date de commande, sachant
            que nous ne pouvons pas effectuer de livraisons les week-ends et
            jours fériés. Ainsi, toutes les livraisons arriveront à votre porte
            en semaine du samedi au Jeudi.
          </li>

          <li>
            Toutes les commandes ont droit à des frais d'expédition et de
            traitement.
          </li>
          <li>
            Les produits ne peuvent pas être expédiés à une adresse incomplète
            ou à une adresse autre que l'adresse indiquée dans le bon de
            commande.
          </li>
          <li>
            Dans le cas où il n'est pas possible de vous contacter / ou de
            refuser de recevoir le produit pour une raison autre que l'erreur
            dans la commande qui vous a été envoyée, vous vous engagez à payer
            uniquement les frais de livraison, ou à les déduire du montant payé
            en ligne dans le magasin Zenoubia.
          </li>
          <li>
            Lorsque la livraison est terminée, veuillez signer le bon de
            livraison pour confirmer qu'il n'y a aucun défaut dans la boîte de
            livraison et le(s) produit(s).
          </li>
          <li>Politique de retour et de remboursement </li>
          <li>
            Nous recevrons avec plaisir la demande de retour et de remboursement
            de votre commande sous réserve des conditions suivantes :
          </li>
          <li>
            Nous acceptons le retour des marchandises dans les 7 jours à compter
            de la date de livraison.
          </li>
          <li>
            La marchandise retournée doit être dans le même état dans lequel
            elle a été livrée et n'a jamais été utilisée avec la boîte
            d'origine, y compris les étiquettes, étiquettes ou accessoires
            fournis avec le produit ou à l'intérieur de la boîte.
          </li>
          <li>
            Le client doit payer les frais d'expédition pour retourner la
            commande, sauf si la raison du retour est causée par Zenoubia Store
            Team.
          </li>
          <li>
            Les sous-vêtements et pyjamas ne peuvent être ni repris ni échangés
            pour des raisons d'hygiène.
          </li>
          <li>
            Vous pouvez demander le retour de votre commande en vous connectant
            à votre compte sur le site Zenoubia, puis en cliquant sur la page «
            Nous contacter », puis en écrivant dans l'objet du message «
            Retourner une commande » et en précisant dans le texte du message le
            numéro de commande que vous souhaitez retourner en tout ou en
            partie, et en choisissant le motif du retour.
          </li>
          <li>
            Pour plus d'assistance, veuillez appeler le service client de
            Zenoubia au +213560933380 pendant les jours ouvrables du samedi au
            jeudi (9h-19h).
          </li>
          <li>
            Une fois que nous aurons reçu la commande et examiné les détails,
            nous vous contacterons pour discuter de la raison du retour. Sur
            cette base, nous pouvons déterminer si la demande sera acceptée ou
            non dans les 3 jours ouvrables.
          </li>
          <li>
            La décision de demander un retour doit être ferme et engageante sans
            engager la responsabilité de Zenoubia.
          </li>
          <li>
            Si vous avez utilisé (carte de crédit ou de débit) pour payer la
            commande, le montant payé sera recrédité sur votre carte. Le
            remboursement sera reflété dans votre carte en fonction des
            opérations bancaires de chaque banque, dans certains cas, cela peut
            prendre jusqu'à un mois.
          </li>
          <li>
            Dans le cas où vous auriez besoin d'annuler votre commande après
            avoir payé avec (carte de crédit ou carte de débit), des frais de
            remboursement vous seront facturés en fonction de votre type de
            carte (Visa / MasterCard)
          </li>
          <li>
            Dans le cas d'un contre-remboursement, veuillez nous fournir vos
            coordonnées bancaires pour un remboursement (IBAN, nom de la banque,
            nom du titulaire du compte).
          </li>
        </ul>
      </div>
    </StaticLayout>
  );
};

export default Billing;
