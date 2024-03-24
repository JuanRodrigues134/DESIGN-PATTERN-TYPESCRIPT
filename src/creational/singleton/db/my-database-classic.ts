export class MyDatabaseClassic {
  private static instance: MyDatabaseClassic | null = null;

  private constructor() {}

  public static getInstance(): MyDatabaseClassic {
    if (!MyDatabaseClassic.instance) {
      MyDatabaseClassic.instance = new MyDatabaseClassic();
    }
    return MyDatabaseClassic.instance;
  }
}
