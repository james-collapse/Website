namespace Server.Types;

public class Result {
    public string? Text {get; set;}
}

public class Event {
    public string Name {get; set;}
    public string Location {get; set;}
    public string Date {get; set;}
}

public class TodoItem {
    public long Id { get; set; }
    public string? Name { get; set; }
    public bool IsComplete { get; set; }
}