//creo e inicializo tarjeta y obtengo ATR
card = new Card();
atr = card.reset(Card.RESET_COLD);
print("Reset Card OK y obtención del ATR OK");
//obtengo nº tarjeta, NUID
response = card.plainApdu(new ByteString("FF CA 00 00 04", HEX));
print("Número de serie - NUID: " + response);
print("Código SW CA - Leer Nun Serie: " + card.SW.toString(16));
//cargo keys en lector
response = card.plainApdu(new ByteString("FF 82 00 00 06 FF FF FF FF FF FF", HEX));
print("Cargo authentication keys en lector: " + "FF FF FF FF FF FF");
print("Código SW 82 - Load authentication key: " + card.SW.toString(16));
//autentico en bloque 4 / sector 1
response = card.plainApdu(new ByteString("FF 86 00 00 05 01 00 04 60 00", HEX));
print("autentico en bloques 04, 05 y 06: " + "Código SW 86: " + card.SW.toString(16));
//response = card.plainApdu(new ByteString("FF B0 00 04 10", HEX));
//escribo en bloque 4 , 5 Y 6 JOSE & GUTIERREZ & FERNANDEZ
response = card.plainApdu(new ByteString("FF D6 00 04 10 4A 4F 53 45 20 20 20 20 20 20 20 20 20 20 20 20", HEX));
print("escribo en bloque 04: JOSE            " + "Código SW D6: " + card.SW.toString(16));
response = card.plainApdu(new ByteString("FF D6 00 05 10 47 55 54 49 45 52 52 45 5A 20 20 20 20 20 20 20", HEX));
print("escribo en bloque 05: GUTIERREZ       " + "Código SW D6: " + card.SW.toString(16));
response = card.plainApdu(new ByteString("FF D6 00 06 10 46 45 52 4E 41 4E 44 45 5A 20 20 20 20 20 20 20", HEX));
print("escribo en bloque 06: FERNANDEZ       " + "Código SW D6: " + card.SW.toString(16));
//cambio condiciones de acceso del sector 1 bloque 7 sector trailer [S1][[B0][B1][B2] only read  [S1][B3] R/W con key A = 111111111111
//escribo en bloque 7 KeyA + Access Bits + KeyB = 11 11 11 11 11 11 8F 07 87 69 11 11 11 11 11 11
response = card.plainApdu(new ByteString("FF D6 00 07 10 11 11 11 11 11 11 8F 07 87 69 11 11 11 11 11 11", HEX));
print("escribo [S1][B3]: 11 11 11 11 11 11 8F 07 87 69 11 11 11 11 11 11 " + "Código SW D6: " + card.SW.toString(16));





