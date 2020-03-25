DROP DATABASE IF EXISTS CarNosticTracker_db;
CREATE DATABASE CarNosticTracker_db;

USE CarNosticTracker_db;

CREATE TABLE clicks (
    id INTEGER(11) AUTO_INCREMENT NOT NULL,
    pageId VARCHAR(255),
    click_counter INTEGER(11),
    PRIMARY KEY (id)
);


CREATE TABLE searchTerms (
    id INTEGER(11) AUTO_INCREMENT NOT NULL,
    search VARCHAR(255),
    TIMESTAMP FALSE,
    PRIMARY KEY (id)
);


INSERT INTO clicks (pageId, click_counter) values ('Warning Lights', 0);
INSERT INTO clicks (pageId, click_counter) values ('Brake Noise', 0);
INSERT INTO clicks (pageId, click_counter) values ("Car Won't Start", 0);
INSERT INTO clicks (pageId, click_counter) values ('Change A Flat Tire', 0);
INSERT INTO clicks (pageId, click_counter) values ('Change Oil', 0);
INSERT INTO clicks (pageId, click_counter) values ('Jump Start A Car', 0);
INSERT INTO clicks (pageId, click_counter) values ('Search', 0);


