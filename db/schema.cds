namespace golf;


using { managed } from '@sap/cds/common';

entity Rounds : managed {
  key ID : UUID;
  title  : String(111);
  //holes  : Composition of Holes;
}

@assert.range
entity Holes {
  key hole : Integer;
  roundId: UUID;
  par : Integer;
  score : Integer;
  //shots : Composition of Shots;
}

entity Shots {
  key shot : Integer;
  club     : String(64);
  distanceYards : Integer;
}

@assert.range
type ClubType : String enum { Wood; Iron; Putter; Wedge }
entity Clubs {
  key id: UUID;
  type  : ClubType;
  value : Integer;
}
