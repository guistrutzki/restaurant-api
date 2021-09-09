import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AlterPlacesAddRating1631154963754 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'restaurants',
      new TableColumn({
        name: 'rating',
        type: 'int',
        default: 3,
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('restaurants', 'rating');
  }
}
