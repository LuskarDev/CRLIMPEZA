import icShield from '../assets/icons/ic_shield.png'
import icTruck from '../assets/icons/ic_truck.png'
import icHeadset from '../assets/icons/ic_headset.png'
import icDollar from '../assets/icons/ic_dollar.png'
import icFastTruck from '../assets/icons/ic_fasttruck.png'
import icSparkle from '../assets/icons/ic_sparkle.png'
import icWhatsapp from '../assets/icons/ic_whatsapp.png'
import icCart from '../assets/icons/ic_cart.png'
import icBucket from '../assets/icons/ic_bucket.png'
import icBug from '../assets/icons/ic_bug.png'
import icMop from '../assets/icons/ic_mop.png'
import icBuildings from '../assets/icons/ic_buildings.png'
import icSpray from '../assets/icons/ic_spray.png'
import icPipe from '../assets/icons/ic_pipe.png'
import icThumbsBadge from '../assets/icons/ic_thumbsbadge.png'
import icBottle from '../assets/icons/ic_bottle.png'
import icHandDollar from '../assets/icons/ic_handdollar.png'
import icPerson from '../assets/icons/ic_person.png'
import icHandshake from '../assets/icons/ic_handshake.png'
import icHouse from '../assets/icons/ic_house.png'
import icSmiley from '../assets/icons/ic_smiley.png'
import icPeople from '../assets/icons/ic_people.png'
import icPeoplePlus from '../assets/icons/ic_peopleplus.png'
import icGift from '../assets/icons/ic_gift.png'
import icFacebook from '../assets/icons/ic_facebook.png'
import icInstagram from '../assets/icons/ic_instagram.png'
import icPix from '../assets/icons/ic_pix.png'
import icVisa from '../assets/icons/ic_visa.png'
import icMastercard from '../assets/icons/ic_mastercard.png'
import icHipercard from '../assets/icons/ic_hipercard.png'
import icBoleto from '../assets/icons/ic_boleto.png'

const ICONS = {
  shield: icShield,
  truck: icTruck,
  headset: icHeadset,
  dollar: icDollar,
  fasttruck: icFastTruck,
  sparkle: icSparkle,
  whatsapp: icWhatsapp,
  cart: icCart,
  bucket: icBucket,
  bug: icBug,
  mop: icMop,
  buildings: icBuildings,
  spray: icSpray,
  pipe: icPipe,
  thumbsbadge: icThumbsBadge,
  bottle: icBottle,
  handdollar: icHandDollar,
  person: icPerson,
  handshake: icHandshake,
  house: icHouse,
  smiley: icSmiley,
  people: icPeople,
  peopleplus: icPeoplePlus,
  gift: icGift,
  facebook: icFacebook,
  instagram: icInstagram,
  pix: icPix,
  visa: icVisa,
  mastercard: icMastercard,
  hipercard: icHipercard,
  boleto: icBoleto,
}

export default function Icon({ name, alt = '', ...props }) {
  const src = ICONS[name]
  if (!src) return null
  return <img src={src} alt={alt} loading="lazy" {...props} />
}
