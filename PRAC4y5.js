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


WRITE_MEMORY_CARD01 = new ByteString("FF D6 00 01 10 20 20 20 45 54 53 49 53 49 20 55 50 4D 20 20 20", HEX);//decla. C-APDU
WRITE_MEMORY_CARD02 = new ByteString("FF D6 00 02 10 43 41 4D 50 55 53 20 53 55 52 20 32 38 30 33 31", HEX);//decla. C-APDU
WRITE_MEMORY_CARD03 = new ByteString("FF D6 00 03 10 FF FF FF FF FF FF 9F 07 86 69 FF FF FF FF FF FF", HEX);//decla. C-APDU

WRITE_MEMORY_CARD04 = new ByteString("FF D6 00 04 10 53 41 4E 54 49 41 47 4F 20 20 20 20 20 20 20 20", HEX);//decla. C-APDU
WRITE_MEMORY_CARD05 = new ByteString("FF D6 00 05 10 42 41 55 5A 41 20 20 20 20 20 20 20 20 20 20 20", HEX);//decla. C-APDU
WRITE_MEMORY_CARD06 = new ByteString("FF D6 00 06 10 48 49 52 53 43 48 4C 45 52 20 20 20 20 20 20 20", HEX);//decla. C-APDU
WRITE_MEMORY_CARD07 = new ByteString("FF D6 00 07 10 FF FF FF FF FF FF 8F 07 87 69 FF FF FF FF FF FF", HEX);//decla. C-APDU

WRITE_MEMORY_CARD08 = new ByteString("FF D6 00 08 10 4D 41 54 52 49 43 55 4C 41 3A 42 4F 30 34 37 36", HEX);//decla. C-APDU
WRITE_MEMORY_CARD09 = new ByteString("FF D6 00 09 10 73 2E 62 61 75 7A 61 40 61 6C 75 6D 6E 6F 73 2E", HEX);//decla. C-APDU
WRITE_MEMORY_CARD0A = new ByteString("FF D6 00 0A 10 75 70 6D 2E 65 73 20 20 20 20 20 20 20 20 20 20", HEX);//decla. C-APDU
WRITE_MEMORY_CARD0B = new ByteString("FF D6 00 0B 10 FF FF FF FF FF FF 8F 07 87 69 FF FF FF FF FF FF", HEX);//decla. C-APDU

WRITE_MEMORY_CARD0C = new ByteString("FF D6 00 0C 10 2A 2A 41 53 49 47 4E 41 54 55 52 41 53 2A 2A 2A", HEX);//decla. C-APDU
WRITE_MEMORY_CARD0D = new ByteString("FF D6 00 0D 10 30 30 31 31 30 30 30 30 30 30 30 30 30 30 30 30", HEX);//decla. C-APDU
WRITE_MEMORY_CARD0E = new ByteString("FF D6 00 0E 10 30 31 30 30 30 30 30 30 30 30 30 31 30 30 30 30", HEX);//decla. C-APDU
WRITE_MEMORY_CARD0F = new ByteString("FF D6 00 0F 10 FF FF FF FF FF FF E9 67 81 69 FF FF FF FF FF FF", HEX);//decla. C-APDU

WRITE_MEMORY_CARD10 = new ByteString("FF D6 00 10 10 2A 50 55 42 4C 49 43 41 43 49 4F 4E 45 53 2A 2A", HEX);//decla. C-APDU
WRITE_MEMORY_CARD11 = new ByteString("FF D6 00 11 10 2A 2A 46 45 43 48 41 3A 33 31 2F 31 30 2F 32 32", HEX);//decla. C-APDU
WRITE_MEMORY_CARD12 = new ByteString("FF D7 00 12 05 00 00 00 00 14", HEX);//decla. C-APDU
WRITE_MEMORY_CARD13 = new ByteString("FF D6 00 13 10 FF FF FF FF FF FF A9 67 85 69 FF FF FF FF FF FF", HEX);//decla. C-APDU

WRITE_MEMORY_CARD14 = new ByteString("FF D6 00 14 10 2A 46 4F 54 4F 43 4F 50 49 41 44 4F 52 41 53 2A", HEX);//decla. C-APDU
WRITE_MEMORY_CARD15 = new ByteString("FF D6 00 15 10 2A 2A 46 45 43 48 41 3A 33 31 2F 31 30 2F 32 32", HEX);//decla. C-APDU
WRITE_MEMORY_CARD16 = new ByteString("FF D7 00 16 05 00 00 00 00 3C", HEX);//decla. C-APDU
WRITE_MEMORY_CARD17 = new ByteString("FF D6 00 17 10 FF FF FF FF FF FF A9 67 85 69 FF FF FF FF FF FF", HEX);//decla. C-APDU

WRITE_MEMORY_CARD18 = new ByteString("FF D6 00 18 10 2A 2A 2A 43 41 46 45 54 45 52 49 41 2A 2A 2A 2A", HEX);//decla. C-APDU
WRITE_MEMORY_CARD19 = new ByteString("FF D6 00 19 10 33 31 2F 31 30 2F 32 32 31 39 3A 30 30 3A 30 30", HEX);//decla. C-APDU
WRITE_MEMORY_CARD1A = new ByteString("FF D7 00 1A 05 00 00 00 00 35", HEX);//decla. C-APDU
WRITE_MEMORY_CARD1B = new ByteString("FF D6 00 1B 10 FF FF FF FF FF FF A9 67 85 69 FF FF FF FF FF FF", HEX);//decla. C-APDU


WRITE_MEMORY_CARD24 = new ByteString("FF D6 00 24 10 2A 2A 2A 42 49 42 4C 49 4F 54 45 43 41 2A 2A 2A", HEX);//decla. C-APDU
WRITE_MEMORY_CARD25 = new ByteString("FF D7 00 25 05 00 00 00 00 04", HEX);//decla. C-APDU
WRITE_MEMORY_CARD26 = new ByteString("FF D7 00 26 05 00 00 00 00 02", HEX);//decla. C-APDU
WRITE_MEMORY_CARD27 = new ByteString("FF D6 00 27 10 FF FF FF FF FF FF 89 67 87 69 FF FF FF FF FF FF", HEX);//decla. C-APDU

WRITE_MEMORY_CARD28 = new ByteString("FF D6 00 28 10 4A 41 56 41 20 46 4F 52 20 44 55 4D 4D 49 45 53", HEX);//decla. C-APDU
WRITE_MEMORY_CARD29 = new ByteString("FF D6 00 29 10 46 4F 55 52 54 20 45 44 49 54 49 4F 4E 20 20 20", HEX);//decla. C-APDU
WRITE_MEMORY_CARD2A = new ByteString("FF D6 00 2A 10 33 31 2F 31 30 2F 32 32 33 31 2F 31 32 2F 32 32", HEX);//decla. C-APDU
WRITE_MEMORY_CARD2B = new ByteString("FF D6 00 2B 10 FF FF FF FF FF FF F8 77 80 69 FF FF FF FF FF FF", HEX);//decla. C-APDU

WRITE_MEMORY_CARD2C = new ByteString("FF D6 00 2C 10 45 4D 50 54 59 20 20 20 20 20 20 20 20 20 20 20", HEX);//decla. C-APDU
WRITE_MEMORY_CARD2D = new ByteString("FF D6 00 2D 10 45 4D 50 54 59 20 20 20 20 20 20 20 20 20 20 20", HEX);//decla. C-APDU
WRITE_MEMORY_CARD2E = new ByteString("FF D6 00 2E 10 45 4D 50 54 59 20 20 20 20 20 20 20 20 20 20 20", HEX);//decla. C-APDU
WRITE_MEMORY_CARD2F = new ByteString("FF D6 00 2F 10 FF FF FF FF FF FF F8 77 80 69 FF FF FF FF FF FF", HEX);//decla. C-APDU

WRITE_MEMORY_CARD30 = new ByteString("FF D6 00 30 10 45 4D 50 54 59 20 20 20 20 20 20 20 20 20 20 20", HEX);//decla. C-APDU
WRITE_MEMORY_CARD31 = new ByteString("FF D6 00 31 10 45 4D 50 54 59 20 20 20 20 20 20 20 20 20 20 20", HEX);//decla. C-APDU
WRITE_MEMORY_CARD32 = new ByteString("FF D6 00 32 10 45 4D 50 54 59 20 20 20 20 20 20 20 20 20 20 20", HEX);//decla. C-APDU
WRITE_MEMORY_CARD33 = new ByteString("FF D6 00 33 10 FF FF FF FF FF FF F8 77 80 69 FF FF FF FF FF FF", HEX);//decla. C-APDU

WRITE_MEMORY_CARD34 = new ByteString("FF D6 00 34 10 45 4D 50 54 59 20 20 20 20 20 20 20 20 20 20 20", HEX);//decla. C-APDU
WRITE_MEMORY_CARD35 = new ByteString("FF D6 00 35 10 45 4D 50 54 59 20 20 20 20 20 20 20 20 20 20 20", HEX);//decla. C-APDU
WRITE_MEMORY_CARD36 = new ByteString("FF D6 00 36 10 45 4D 50 54 59 20 20 20 20 20 20 20 20 20 20 20", HEX);//decla. C-APDU
WRITE_MEMORY_CARD37 = new ByteString("FF D6 00 37 10 FF FF FF FF FF FF F8 77 80 69 FF FF FF FF FF FF", HEX);//decla. C-APDU

WRITE_MEMORY_CARD38 = new ByteString("FF D6 00 38 10 52 46 49 44 20 50 52 49 4E 43 49 50 4C 45 53 20", HEX);//decla. C-APDU
WRITE_MEMORY_CARD39 = new ByteString("FF D6 00 39 10 49 53 4F 20 31 34 34 33 41 2F 42 20 20 20 20 20", HEX);//decla. C-APDU
WRITE_MEMORY_CARD3A = new ByteString("FF D6 00 3A 10 33 31 2F 31 30 2F 32 32 33 31 2F 31 32 2F 32 32", HEX);//decla. C-APDU
WRITE_MEMORY_CARD3B = new ByteString("FF D6 00 3B 10 FF FF FF FF FF FF F8 77 80 69 FF FF FF FF FF FF", HEX);//decla. C-APDU

WRITE_MEMORY_CARD3C = new ByteString("FF D6 00 3C 10 52 45 43 41 52 47 41 2F 43 52 45 44 49 54 4F 53", HEX);//decla. C-APDU
WRITE_MEMORY_CARD3D = new ByteString("FF D7 00 3D 05 00 00 00 09 C4", HEX);//decla. C-APDU
WRITE_MEMORY_CARD3E = new ByteString("FF D7 00 3E 05 00 00 00 00 FA", HEX);//decla. C-APDU
WRITE_MEMORY_CARD3F = new ByteString("FF D6 00 3F 10 FF FF FF FF FF FF 89 67 87 69 FF FF FF FF FF FF", HEX);//decla. C-APDU

card = new Card(); //creamos un objeto Card()
atr = card.reset(Card.RESET_COLD);//reset de la tarjeta
card.plainApdu(SELECT_CARD);//seleccionamos tipo de tarjeta 06h:5542

print("Reseteo de los sectores a fabrica");

card.plainApdu(Sector0);
card.plainApdu(WRITE_MEMORY_CARD01);//1envío C-APDU de lectura
card.plainApdu(WRITE_MEMORY_CARD02);//1envío C-APDU de lectura
card.plainApdu(WRITE_MEMORY_CARD03);//1envío C-APDU de lectura
print("Sector 0 SW: " + card.SW.toString(HEX));

card.plainApdu(Sector1);
card.plainApdu(WRITE_MEMORY_CARD04);//1envío C-APDU de lectura
card.plainApdu(WRITE_MEMORY_CARD05);//1envío C-APDU de lectura
card.plainApdu(WRITE_MEMORY_CARD06);//1envío C-APDU de lectura
card.plainApdu(WRITE_MEMORY_CARD07);//1envío C-APDU de lectura
print("Sector 1 SW: " + card.SW.toString(HEX));

card.plainApdu(Sector2);
card.plainApdu(WRITE_MEMORY_CARD08);//1envío C-APDU de lectura
card.plainApdu(WRITE_MEMORY_CARD09);//1envío C-APDU de lectura
card.plainApdu(WRITE_MEMORY_CARD0A);//1envío C-APDU de lectura
card.plainApdu(WRITE_MEMORY_CARD0B);//1envío C-APDU de lectura
print("Sector 2 SW: " + card.SW.toString(HEX));

card.plainApdu(Sector3);
card.plainApdu(WRITE_MEMORY_CARD0C);//1envío C-APDU de lectura
card.plainApdu(WRITE_MEMORY_CARD0D);//1envío C-APDU de lectura
card.plainApdu(WRITE_MEMORY_CARD0E);//1envío C-APDU de lectura
card.plainApdu(WRITE_MEMORY_CARD0F);//1envío C-APDU de lectura
print("Sector 3 SW: " + card.SW.toString(HEX));

card.plainApdu(Sector4);
card.plainApdu(WRITE_MEMORY_CARD10);//1envío C-APDU de lectura
card.plainApdu(WRITE_MEMORY_CARD11);//1envío C-APDU de lectura
card.plainApdu(WRITE_MEMORY_CARD12);//1envío C-APDU de lectura
card.plainApdu(WRITE_MEMORY_CARD13);//1envío C-APDU de lectura
print("Sector 4 SW: " + card.SW.toString(HEX));

card.plainApdu(Sector5);
card.plainApdu(WRITE_MEMORY_CARD14);//1envío C-APDU de lectura
card.plainApdu(WRITE_MEMORY_CARD15);//1envío C-APDU de lectura
card.plainApdu(WRITE_MEMORY_CARD16);//1envío C-APDU de lectura
card.plainApdu(WRITE_MEMORY_CARD17);//1envío C-APDU de lectura
print("Sector 5 SW: " + card.SW.toString(HEX));

card.plainApdu(Sector6);
card.plainApdu(WRITE_MEMORY_CARD18);//1envío C-APDU de lectura
card.plainApdu(WRITE_MEMORY_CARD19);//1envío C-APDU de lectura
card.plainApdu(WRITE_MEMORY_CARD1A);//1envío C-APDU de lectura
card.plainApdu(WRITE_MEMORY_CARD1B);//1envío C-APDU de lectura
print("Sector 6 SW: " + card.SW.toString(HEX));


card.plainApdu(Sector9);
card.plainApdu(WRITE_MEMORY_CARD24);//1envío C-APDU de lectura
card.plainApdu(WRITE_MEMORY_CARD25);//1envío C-APDU de lectura
card.plainApdu(WRITE_MEMORY_CARD26);//1envío C-APDU de lectura
card.plainApdu(WRITE_MEMORY_CARD27);//1envío C-APDU de lectura
print("Sector 9 SW: " + card.SW.toString(HEX));

card.plainApdu(Sector10);
card.plainApdu(WRITE_MEMORY_CARD28);//1envío C-APDU de lectura
card.plainApdu(WRITE_MEMORY_CARD29);//1envío C-APDU de lectura
card.plainApdu(WRITE_MEMORY_CARD2A);//1envío C-APDU de lectura
card.plainApdu(WRITE_MEMORY_CARD2B);//1envío C-APDU de lectura
print("Sector 10 SW: " + card.SW.toString(HEX));

card.plainApdu(Sector11);
card.plainApdu(WRITE_MEMORY_CARD2C);//1envío C-APDU de lectura
card.plainApdu(WRITE_MEMORY_CARD2D);//1envío C-APDU de lectura
card.plainApdu(WRITE_MEMORY_CARD2E);//1envío C-APDU de lectura
card.plainApdu(WRITE_MEMORY_CARD2F);//1envío C-APDU de lectura
print("Sector 11 SW: " + card.SW.toString(HEX));

card.plainApdu(Sector12);
card.plainApdu(WRITE_MEMORY_CARD30);//1envío C-APDU de lectura
card.plainApdu(WRITE_MEMORY_CARD31);//1envío C-APDU de lectura
card.plainApdu(WRITE_MEMORY_CARD32);//1envío C-APDU de lectura
card.plainApdu(WRITE_MEMORY_CARD33);//1envío C-APDU de lectura
print("Sector 12 SW: " + card.SW.toString(HEX));

card.plainApdu(Sector13);
card.plainApdu(WRITE_MEMORY_CARD34);//1envío C-APDU de lectura
card.plainApdu(WRITE_MEMORY_CARD35);//1envío C-APDU de lectura
card.plainApdu(WRITE_MEMORY_CARD36);//1envío C-APDU de lectura
card.plainApdu(WRITE_MEMORY_CARD37);//1envío C-APDU de lectura
print("Sector 13 SW: " + card.SW.toString(HEX));

card.plainApdu(Sector14);
card.plainApdu(WRITE_MEMORY_CARD38);//1envío C-APDU de lectura
card.plainApdu(WRITE_MEMORY_CARD39);//1envío C-APDU de lectura
card.plainApdu(WRITE_MEMORY_CARD3A);//1envío C-APDU de lectura
card.plainApdu(WRITE_MEMORY_CARD3B);//1envío C-APDU de lectura
print("Sector 14 SW: " + card.SW.toString(HEX));

card.plainApdu(Sector15);
response3C = card.plainApdu(WRITE_MEMORY_CARD3C);//1envío C-APDU de lectura
response3D = card.plainApdu(WRITE_MEMORY_CARD3D);//1envío C-APDU de lectura
response3E = card.plainApdu(WRITE_MEMORY_CARD3E);//1envío C-APDU de lectura
response3F = card.plainApdu(WRITE_MEMORY_CARD3F);//1envío C-APDU de lectura
print("Sector 15 SW: " + card.SW.toString(HEX));

card.close();//desactivo tarjeta en el lector
print("-----------------------------");//imprimo línea de texto
print("tarjeta desactivada");//imprimo texto
//SANTIAGO BAUZÁ HIRSCHLER