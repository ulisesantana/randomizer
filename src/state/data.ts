import {Categories, RawCategory} from "../types";
import {mapToID} from "../utils";

export const categories: Categories = [
  {
    "id": "5ceed757fc13ae323d000000",
    "label": "Huapangos",
    "items": [
      {
        "id": "5ceed757fc13ae323d000001",
        "label": "Serenata Huatesca"
      },
      {
        "id": "5ceed757fc13ae323d000002",
        "label": "La Malagueña"
      },
      {
        "id": "5ceed757fc13ae323d000003",
        "label": "Currucucucu Paloma"
      },
    ]
  },
  {
    "id": "5ceed757fc13ae323d000006",
    "label": "Sones",
    "items": [
      {
        "id": "5ceed757fc13ae323d000007",
        "label": "La negra"
      },
      {
        "id": "5ceed757fc13ae323d000008",
        "label": "Un poco loco"
      },
      {
        "id": "5ceed757fc13ae323d000009",
        "label": "Jarabe tapatio"
      }
    ]
  },
  {
    "id": "5ceed757fc13ae323d00000c",
    "label": "Corridos",
    "items": [
      {
        "id": "5ceed757fc13ae323d00000d",
        "label": "No me sé rajar"
      },
      {
        "id": "5ceed757fc13ae323d00000e",
        "label": "Rancho grande"
      },
      {
        "id": "5ceed757fc13ae323d00000f",
        "label": "Mátalas"
      }
    ]
  },
  {
    "id": "5ceed757fc13ae323d000012",
    "label": "Rancheras",
    "items": [
      {
        "id": "5ceed757fc13ae323d000013",
        "label": "Ella"
      },
      {
        "id": "5ceed757fc13ae323d000014",
        "label": "Cielito lindo"
      },
      {
        "id": "5ceed757fc13ae323d000015",
        "label": "Se me olvidó otra vez"
      }
    ]
  },
  {
    "id": "5ceed757fc13ae323d000018",
    "label": "Boleros",
    "items": [
      {
        "id": "5ceed757fc13ae323d000019",
        "label": "Si nos dejan"
      },
      {
        "id": "5ceed757fc13ae323d00001a",
        "label": "La media vuelta"
      },
      {
        "id": "5ceed757fc13ae323d00001b",
        "label": "Motivos"
      }
    ]
  }
].reduce((acc, cat: RawCategory) =>
  ({
    ...acc,
    [cat.id]: {
      ...cat,
      items: mapToID(Object.values(cat.items))
    }
  }), {} as Categories);
