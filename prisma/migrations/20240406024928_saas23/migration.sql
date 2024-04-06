-- AlterTable
CREATE SEQUENCE company_id_seq;
ALTER TABLE "Company" ALTER COLUMN "id" SET DEFAULT nextval('company_id_seq');
ALTER SEQUENCE company_id_seq OWNED BY "Company"."id";

-- AlterTable
CREATE SEQUENCE contact_id_seq;
ALTER TABLE "Contact" ALTER COLUMN "id" SET DEFAULT nextval('contact_id_seq');
ALTER SEQUENCE contact_id_seq OWNED BY "Contact"."id";

-- AlterTable
CREATE SEQUENCE viewsandlikes_id_seq;
ALTER TABLE "ViewsAndLikes" ALTER COLUMN "id" SET DEFAULT nextval('viewsandlikes_id_seq');
ALTER SEQUENCE viewsandlikes_id_seq OWNED BY "ViewsAndLikes"."id";
