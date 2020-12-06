import {MigrationInterface, QueryRunner} from "typeorm";

export class InitialProduct_1607295966219 implements MigrationInterface {
    name = 'InitialProduct_1607295966219'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `product` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(100) NOT NULL DEFAULT 'No prod', `price` int NOT NULL DEFAULT '0', `isActive` tinyint NOT NULL DEFAULT 1, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `component` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(100) NOT NULL DEFAULT 'No component', `price` int NOT NULL DEFAULT '0', `productId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `component` ADD CONSTRAINT `FK_7dbcf162f7c2d7f07de267bcb8c` FOREIGN KEY (`productId`) REFERENCES `product`(`id`) ON DELETE CASCADE ON UPDATE CASCADE");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `component` DROP FOREIGN KEY `FK_7dbcf162f7c2d7f07de267bcb8c`");
        await queryRunner.query("DROP TABLE `component`");
        await queryRunner.query("DROP TABLE `product`");
    }

}
