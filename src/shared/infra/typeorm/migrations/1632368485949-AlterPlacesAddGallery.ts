import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AlterPlacesAddGallery1632368485949 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'restaurants',
      new TableColumn({
        name: 'gallery',
        type: 'varchar',
        isNullable: true,
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('restaurants', 'gallery');
  }
}
