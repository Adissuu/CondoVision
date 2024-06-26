interface CondoFees {
  includes: string[];
  isPayed: boolean;
  monthlyFee: number;
}

interface OccupantInfo {
  contact: string;
  name: string;
}

class CondoUnitAdapter {
  private id: string;
  private condoFees: CondoFees;
  private lockerId: string;
  private occupantInfo: OccupantInfo;
  private owner: string;
  private parkingSpotId: string;
  private size: string;
  private unitId: string;

  constructor(
    id: string,
    condoFees: CondoFees,
    lockerId: string,
    occupantInfo: OccupantInfo,
    owner: string,
    parkingSpotId: string,
    size: string,
    unitId: string
  ) {
    this.id = id;
    this.condoFees = condoFees;
    this.lockerId = lockerId;
    this.occupantInfo = occupantInfo;
    this.owner = owner;
    this.parkingSpotId = parkingSpotId;
    this.size = size;
    this.unitId = unitId;
  }

  toJSON = () => {
    return {
      id: this.id,
      condoFees: {
        includes: this.condoFees.includes,
        isPayed: this.condoFees.isPayed,
        monthlyFee: this.condoFees.monthlyFee,
      },
      lockerId: this.lockerId,
      occupantInfo: {
        contact: this.occupantInfo.contact,
        name: this.occupantInfo.name,
      },
      owner: this.owner,
      parkingSpotId: this.parkingSpotId,
      size: this.size,
      unitId: this.unitId,
    };
  };
}

export default CondoUnitAdapter;
