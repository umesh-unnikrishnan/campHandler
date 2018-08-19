CREATE TABLE `ch_district` (
	`id` INT NOT NULL,
	`dist_name` varchar(255) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `ch_camps` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`camp_name` varchar(255) NOT NULL AUTO_INCREMENT,
	`dist_id` INT NOT NULL,
	`address` TEXT NOT NULL,
	`landmark` TEXT,
	`male_count` INT,
	`female_count` INT NOT NULL,
	`child_count` INT NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `ch_users` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`user_name` varchar(255) NOT NULL,
	`passwd` varchar(255) NOT NULL,
	`role_id` INT NOT NULL,
	`camp_id` INT,
	`contact_no` varchar(255),
	`address` TEXT,
	PRIMARY KEY (`id`)
);

CREATE TABLE `ch_inventory` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`item_name` varchar(255) NOT NULL,
	`camp_id` INT NOT NULL,
	`req_qty` INT NOT NULL,
	`received_qty` INT NOT NULL,
	`unit` varchar(32) NOT NULL,
	`severity` varchar(32) NOT NULL,
	`ack_status` varchar(32) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `ch_roles` (
	`id` INT NOT NULL,
	`role_name` varchar NOT NULL
);

ALTER TABLE `ch_camps` ADD CONSTRAINT `ch_camps_fk0` FOREIGN KEY (`dist_id`) REFERENCES `ch_district`(`id`);

ALTER TABLE `ch_users` ADD CONSTRAINT `ch_users_fk0` FOREIGN KEY (`role_id`) REFERENCES `ch_roles`(`id`);

ALTER TABLE `ch_users` ADD CONSTRAINT `ch_users_fk1` FOREIGN KEY (`camp_id`) REFERENCES `ch_camps`(`id`);

ALTER TABLE `ch_inventory` ADD CONSTRAINT `ch_inventory_fk0` FOREIGN KEY (`camp_id`) REFERENCES `ch_camps`(`id`);

