export class RecordDataType
{
    private date : String;
    private time : String;
    private name : String;

    public constructor(date : String, time : String, name : String)
    {
        this.date = date;
        this.time = time;
        this.name = name;
    }

    public getDate() : String
    {
        return this.date;
    }
    public getName() : String
    {
        return this.name;
    }
    public getTime() : String
    {
        return this.time;
    }
}