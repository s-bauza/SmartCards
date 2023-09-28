SELECT_CARD = new ByteString("FF 82 00 00 06 FF FF FF FF FF FF", HEX);//declaro C-APDU

Sector0 = new ByteString("FF 86 00 00 05 01 00 00 60 00", HEX);
Sector1 = new ByteString("FF 86 00 00 05 01 00 04 60 00", HEX);
Sector2 = new ByteString("FF 86 00 00 05 01 00 08 60 00", HEX);
Sector3 = new ByteString("FF 86 00 00 05 01 00 0C 60 00", HEX);
Sector4 = new ByteString("FF 86 00 00 05 01 00 10 60 00", HEX);
Sector5 = new ByteString("FF 86 00 00 05 01 00 14 60 00", HEX);
Sector6 = new ByteString("FF 86 00 00 05 01 00 18 60 00", HEX);
Sector7 = new ByteString("FF 86 00 00 05 01 00 1C 60 00", HEX);
Sector8 = new ByteString("FF 86 00 00 05 01 00 20 60 00", HEX);
Sector9 = new ByteString("FF 86 00 00 05 01 00 24 60 00", HEX);
Sector10 = new ByteString("FF 86 00 00 05 01 00 28 60 00", HEX);
Sector11 = new ByteString("FF 86 00 00 05 01 00 2C 60 00", HEX);
Sector12 = new ByteString("FF 86 00 00 05 01 00 30 60 00", HEX);
Sector13 = new ByteString("FF 86 00 00 05 01 00 34 60 00", HEX);
Sector14 = new ByteString("FF 86 00 00 05 01 00 38 60 00", HEX);
Sector15 = new ByteString("FF 86 00 00 05 01 00 3C 60 00", HEX);

//READ_MEMORY_CARD00 = new ByteString("FF B0 00 00 10", HEX);//ALGO DEL FABRICANTE
WRITE_MEMORY_CARD01 = new ByteString("FF D6 00 01 10 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00", HEX);//decla. C-APDU
WRITE_MEMORY_CARD02 = new ByteString("FF D6 00 02 10 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00", HEX);//decla. C-APDU
WRITE_MEMORY_CARD03 = new ByteString("FF D6 00 03 10 FF FF FF FF FF FF FF 07 80 69 FF FF FF FF FF FF", HEX);//decla. C-APDU

WRITE_MEMORY_CARD04 = new ByteString("FF D6 00 04 10 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00", HEX);//decla. C-APDU
WRITE_MEMORY_CARD05 = new ByteString("FF D6 00 05 10 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00", HEX);//decla. C-APDU
WRITE_MEMORY_CARD06 = new ByteString("FF D6 00 06 10 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00", HEX);//decla. C-APDU
WRITE_MEMORY_CARD07 = new ByteString("FF D6 00 07 10 FF FF FF FF FF FF FF 07 80 69 FF FF FF FF FF FF", HEX);//decla. C-APDU

WRITE_MEMORY_CARD08 = new ByteString("FF D6 00 08 10 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00", HEX);//decla. C-APDU
WRITE_MEMORY_CARD09 = new ByteString("FF D6 00 09 10 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00", HEX);//decla. C-APDU
WRITE_MEMORY_CARD0A = new ByteString("FF D6 00 0A 10 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00", HEX);//decla. C-APDU
WRITE_MEMORY_CARD0B = new ByteString("FF D6 00 0B 10 FF FF FF FF FF FF FF 07 80 69 FF FF FF FF FF FF", HEX);//decla. C-APDU

WRITE_MEMORY_CARD0C = new ByteString("FF D6 00 0C 10 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00", HEX);//decla. C-APDU
WRITE_MEMORY_CARD0D = new ByteString("FF D6 00 0D 10 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00", HEX);//decla. C-APDU
WRITE_MEMORY_CARD0E = new ByteString("FF D6 00 0E 10 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00", HEX);//decla. C-APDU
WRITE_MEMORY_CARD0F = new ByteString("FF D6 00 0F 10 FF FF FF FF FF FF FF 07 80 69 FF FF FF FF FF FF", HEX);//decla. C-APDU

WRITE_MEMORY_CARD10 = new ByteString("FF D6 00 10 10 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00", HEX);//decla. C-APDU
WRITE_MEMORY_CARD11 = new ByteString("FF D6 00 11 10 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00", HEX);//decla. C-APDU
WRITE_MEMORY_CARD12 = new ByteString("FF D6 00 12 10 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00", HEX);//decla. C-APDU
WRITE_MEMORY_CARD13 = new ByteString("FF D6 00 13 10 FF FF FF FF FF FF FF 07 80 69 FF FF FF FF FF FF", HEX);//decla. C-APDU

WRITE_MEMORY_CARD14 = new ByteString("FF D6 00 14 10 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00", HEX);//decla. C-APDU
WRITE_MEMORY_CARD15 = new ByteString("FF D6 00 15 10 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00", HEX);//decla. C-APDU
WRITE_MEMORY_CARD16 = new ByteString("FF D6 00 16 10 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00", HEX);//decla. C-APDU
WRITE_MEMORY_CARD17 = new ByteString("FF D6 00 17 10 FF FF FF FF FF FF FF 07 80 69 FF FF FF FF FF FF", HEX);//decla. C-APDU

WRITE_MEMORY_CARD18 = new ByteString("FF D6 00 18 10 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00", HEX);//decla. C-APDU
WRITE_MEMORY_CARD19 = new ByteString("FF D6 00 19 10 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00", HEX);//decla. C-APDU
WRITE_MEMORY_CARD1A = new ByteString("FF D6 00 1A 10 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00", HEX);//decla. C-APDU
WRITE_MEMORY_CARD1B = new ByteString("FF D6 00 1B 10 FF FF FF FF FF FF FF 07 80 69 FF FF FF FF FF FF", HEX);//decla. C-APDU

WRITE_MEMORY_CARD1C = new ByteString("FF D6 00 1C 10 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00", HEX);//decla. C-APDU
WRITE_MEMORY_CARD1D = new ByteString("FF D6 00 1D 10 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00", HEX);//decla. C-APDU
WRITE_MEMORY_CARD1E = new ByteString("FF D6 00 1E 10 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00", HEX);//decla. C-APDU
WRITE_MEMORY_CARD1F = new ByteString("FF D6 00 1F 10 FF FF FF FF FF FF FF 07 80 69 FF FF FF FF FF FF", HEX);//decla. C-APDU

WRITE_MEMORY_CARD20 = new ByteString("FF D6 00 20 10 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00", HEX);//decla. C-APDU
WRITE_MEMORY_CARD21 = new ByteString("FF D6 00 21 10 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00", HEX);//decla. C-APDU
WRITE_MEMORY_CARD22 = new ByteString("FF D6 00 22 10 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00", HEX);//decla. C-APDU
WRITE_MEMORY_CARD23 = new ByteString("FF D6 00 23 10 FF FF FF FF FF FF FF 07 80 69 FF FF FF FF FF FF", HEX);//decla. C-APDU

WRITE_MEMORY_CARD24 = new ByteString("FF D6 00 24 10 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00", HEX);//decla. C-APDU
WRITE_MEMORY_CARD25 = new ByteString("FF D6 00 25 10 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00", HEX);//decla. C-APDU
WRITE_MEMORY_CARD26 = new ByteString("FF D6 00 26 10 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00", HEX);//decla. C-APDU
WRITE_MEMORY_CARD27 = new ByteString("FF D6 00 27 10 FF FF FF FF FF FF FF 07 80 69 FF FF FF FF FF FF", HEX);//decla. C-APDU

WRITE_MEMORY_CARD28 = new ByteString("FF D6 00 28 10 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00", HEX);//decla. C-APDU
WRITE_MEMORY_CARD29 = new ByteString("FF D6 00 29 10 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00", HEX);//decla. C-APDU
WRITE_MEMORY_CARD2A = new ByteString("FF D6 00 2A 10 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00", HEX);//decla. C-APDU
WRITE_MEMORY_CARD2B = new ByteString("FF D6 00 2B 10 FF FF FF FF FF FF FF 07 80 69 FF FF FF FF FF FF", HEX);//decla. C-APDU

WRITE_MEMORY_CARD2C = new ByteString("FF D6 00 2C 10 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00", HEX);//decla. C-APDU
WRITE_MEMORY_CARD2D = new ByteString("FF D6 00 2D 10 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00", HEX);//decla. C-APDU
WRITE_MEMORY_CARD2E = new ByteString("FF D6 00 2E 10 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00", HEX);//decla. C-APDU
WRITE_MEMORY_CARD2F = new ByteString("FF D6 00 2F 10 FF FF FF FF FF FF FF 07 80 69 FF FF FF FF FF FF", HEX);//decla. C-APDU

WRITE_MEMORY_CARD30 = new ByteString("FF D6 00 30 10 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00", HEX);//decla. C-APDU
WRITE_MEMORY_CARD31 = new ByteString("FF D6 00 31 10 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00", HEX);//decla. C-APDU
WRITE_MEMORY_CARD32 = new ByteString("FF D6 00 32 10 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00", HEX);//decla. C-APDU
WRITE_MEMORY_CARD33 = new ByteString("FF D6 00 33 10 FF FF FF FF FF FF FF 07 80 69 FF FF FF FF FF FF", HEX);//decla. C-APDU

WRITE_MEMORY_CARD34 = new ByteString("FF D6 00 34 10 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00", HEX);//decla. C-APDU
WRITE_MEMORY_CARD35 = new ByteString("FF D6 00 35 10 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00", HEX);//decla. C-APDU
WRITE_MEMORY_CARD36 = new ByteString("FF D6 00 36 10 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00", HEX);//decla. C-APDU
WRITE_MEMORY_CARD37 = new ByteString("FF D6 00 37 10 FF FF FF FF FF FF FF 07 80 69 FF FF FF FF FF FF", HEX);//decla. C-APDU

WRITE_MEMORY_CARD38 = new ByteString("FF D6 00 38 10 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00", HEX);//decla. C-APDU
WRITE_MEMORY_CARD39 = new ByteString("FF D6 00 39 10 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00", HEX);//decla. C-APDU
WRITE_MEMORY_CARD3A = new ByteString("FF D6 00 3A 10 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00", HEX);//decla. C-APDU
WRITE_MEMORY_CARD3B = new ByteString("FF D6 00 3B 10 FF FF FF FF FF FF FF 07 80 69 FF FF FF FF FF FF", HEX);//decla. C-APDU

WRITE_MEMORY_CARD3C = new ByteString("FF D6 00 3C 10 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00", HEX);//decla. C-APDU
WRITE_MEMORY_CARD3D = new ByteString("FF D6 00 3D 10 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00", HEX);//decla. C-APDU
WRITE_MEMORY_CARD3E = new ByteString("FF D6 00 3E 10 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00", HEX);//decla. C-APDU
WRITE_MEMORY_CARD3F = new ByteString("FF D6 00 3F 10 FF FF FF FF FF FF FF 07 80 69 FF FF FF FF FF FF", HEX);//decla. C-APDU

card = new Card(); //creamos un objeto Card()
atr = card.reset(Card.RESET_COLD);//reset de la tarjeta
card.plainApdu(SELECT_CARD);//seleccionamos tipo de tarjeta 06h:5542

print("Reseteo de los sectores a fabrica");

card.plainApdu(Sector0);
card.plainApdu(WRITE_MEMORY_CARD03);//1env�o C-APDU de lectura
card.plainApdu(WRITE_MEMORY_CARD01);//1env�o C-APDU de lectura
card.plainApdu(WRITE_MEMORY_CARD02);//1env�o C-APDU de lectura
print("Sector 0 SW: " + card.SW.toString(HEX));

card.plainApdu(Sector1);
card.plainApdu(WRITE_MEMORY_CARD07);//1env�o C-APDU de lectura
card.plainApdu(WRITE_MEMORY_CARD04);//1env�o C-APDU de lectura
card.plainApdu(WRITE_MEMORY_CARD05);//1env�o C-APDU de lectura
card.plainApdu(WRITE_MEMORY_CARD06);//1env�o C-APDU de lectura
print("Sector 1 SW: " + card.SW.toString(HEX));

card.plainApdu(Sector2);
card.plainApdu(WRITE_MEMORY_CARD0B);//1env�o C-APDU de lectura
card.plainApdu(WRITE_MEMORY_CARD08);//1env�o C-APDU de lectura
card.plainApdu(WRITE_MEMORY_CARD09);//1env�o C-APDU de lectura
card.plainApdu(WRITE_MEMORY_CARD0A);//1env�o C-APDU de lectura
print("Sector 2 SW: " + card.SW.toString(HEX));

card.plainApdu(Sector3);
card.plainApdu(WRITE_MEMORY_CARD0F);//1env�o C-APDU de lectura
card.plainApdu(WRITE_MEMORY_CARD0C);//1env�o C-APDU de lectura
card.plainApdu(WRITE_MEMORY_CARD0D);//1env�o C-APDU de lectura
card.plainApdu(WRITE_MEMORY_CARD0E);//1env�o C-APDU de lectura
print("Sector 3 SW: " + card.SW.toString(HEX));

card.plainApdu(Sector4);
card.plainApdu(WRITE_MEMORY_CARD13);//1env�o C-APDU de lectura
card.plainApdu(WRITE_MEMORY_CARD10);//1env�o C-APDU de lectura
card.plainApdu(WRITE_MEMORY_CARD11);//1env�o C-APDU de lectura
card.plainApdu(WRITE_MEMORY_CARD12);//1env�o C-APDU de lectura
print("Sector 4 SW: " + card.SW.toString(HEX));

card.plainApdu(Sector5);
card.plainApdu(WRITE_MEMORY_CARD17);//1env�o C-APDU de lectura
card.plainApdu(WRITE_MEMORY_CARD14);//1env�o C-APDU de lectura
card.plainApdu(WRITE_MEMORY_CARD15);//1env�o C-APDU de lectura
card.plainApdu(WRITE_MEMORY_CARD16);//1env�o C-APDU de lectura
print("Sector 5 SW: " + card.SW.toString(HEX));

card.plainApdu(Sector6);
card.plainApdu(WRITE_MEMORY_CARD1B);//1env�o C-APDU de lectura
card.plainApdu(WRITE_MEMORY_CARD18);//1env�o C-APDU de lectura
card.plainApdu(WRITE_MEMORY_CARD19);//1env�o C-APDU de lectura
card.plainApdu(WRITE_MEMORY_CARD1A);//1env�o C-APDU de lectura
print("Sector 6 SW: " + card.SW.toString(HEX));

card.plainApdu(Sector7);
card.plainApdu(WRITE_MEMORY_CARD1F);//1env�o C-APDU de lectura
card.plainApdu(WRITE_MEMORY_CARD1C);//1env�o C-APDU de lectura
card.plainApdu(WRITE_MEMORY_CARD1D);//1env�o C-APDU de lectura
card.plainApdu(WRITE_MEMORY_CARD1E);//1env�o C-APDU de lectura
print("Sector 7 SW: " + card.SW.toString(HEX));

card.plainApdu(Sector8);
card.plainApdu(WRITE_MEMORY_CARD23);//1env�o C-APDU de lectura
card.plainApdu(WRITE_MEMORY_CARD20);//1env�o C-APDU de lectura
card.plainApdu(WRITE_MEMORY_CARD21);//1env�o C-APDU de lectura
card.plainApdu(WRITE_MEMORY_CARD22);//1env�o C-APDU de lectura
print("Sector 8 SW: " + card.SW.toString(HEX));

card.plainApdu(Sector9);
card.plainApdu(WRITE_MEMORY_CARD27);//1env�o C-APDU de lectura
card.plainApdu(WRITE_MEMORY_CARD24);//1env�o C-APDU de lectura
card.plainApdu(WRITE_MEMORY_CARD25);//1env�o C-APDU de lectura
card.plainApdu(WRITE_MEMORY_CARD26);//1env�o C-APDU de lectura
print("Sector 9 SW: " + card.SW.toString(HEX));

card.plainApdu(Sector10);
card.plainApdu(WRITE_MEMORY_CARD2B);//1env�o C-APDU de lectura
card.plainApdu(WRITE_MEMORY_CARD28);//1env�o C-APDU de lectura
card.plainApdu(WRITE_MEMORY_CARD29);//1env�o C-APDU de lectura
card.plainApdu(WRITE_MEMORY_CARD2A);//1env�o C-APDU de lectura
print("Sector 10 SW: " + card.SW.toString(HEX));

card.plainApdu(Sector11);
card.plainApdu(WRITE_MEMORY_CARD2F);//1env�o C-APDU de lectura
card.plainApdu(WRITE_MEMORY_CARD2C);//1env�o C-APDU de lectura
card.plainApdu(WRITE_MEMORY_CARD2D);//1env�o C-APDU de lectura
card.plainApdu(WRITE_MEMORY_CARD2E);//1env�o C-APDU de lectura
print("Sector 11 SW: " + card.SW.toString(HEX));

card.plainApdu(Sector12);
card.plainApdu(WRITE_MEMORY_CARD33);//1env�o C-APDU de lectura
card.plainApdu(WRITE_MEMORY_CARD30);//1env�o C-APDU de lectura
card.plainApdu(WRITE_MEMORY_CARD31);//1env�o C-APDU de lectura
card.plainApdu(WRITE_MEMORY_CARD32);//1env�o C-APDU de lectura
print("Sector 12 SW: " + card.SW.toString(HEX));

card.plainApdu(Sector13);
card.plainApdu(WRITE_MEMORY_CARD37);//1env�o C-APDU de lectura
card.plainApdu(WRITE_MEMORY_CARD34);//1env�o C-APDU de lectura
card.plainApdu(WRITE_MEMORY_CARD35);//1env�o C-APDU de lectura
card.plainApdu(WRITE_MEMORY_CARD36);//1env�o C-APDU de lectura
print("Sector 13 SW: " + card.SW.toString(HEX));

card.plainApdu(Sector14);
card.plainApdu(WRITE_MEMORY_CARD3B);//1env�o C-APDU de lectura
card.plainApdu(WRITE_MEMORY_CARD38);//1env�o C-APDU de lectura
card.plainApdu(WRITE_MEMORY_CARD39);//1env�o C-APDU de lectura
card.plainApdu(WRITE_MEMORY_CARD3A);//1env�o C-APDU de lectura
print("Sector 14 SW: " + card.SW.toString(HEX));

card.plainApdu(Sector15);
response3F = card.plainApdu(WRITE_MEMORY_CARD3F);//1env�o C-APDU de lectura
response3C = card.plainApdu(WRITE_MEMORY_CARD3C);//1env�o C-APDU de lectura
response3D = card.plainApdu(WRITE_MEMORY_CARD3D);//1env�o C-APDU de lectura
response3E = card.plainApdu(WRITE_MEMORY_CARD3E);//1env�o C-APDU de lectura
print("Sector 15 SW: " + card.SW.toString(HEX));

card.close();//desactivo tarjeta en el lector
print("-----------------------------");//imprimo l�nea de texto
print("tarjeta desactivada");//imprimo texto
//SANTIAGO BAUZ� HIRSCHLER