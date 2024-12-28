interface Event {
  title: string;
  start: Date;
  end: Date;
}

export const dates: Event[] = [
  {
    title: "Meeting with Bob",
    start: new Date("2023-10-01T09:00:00"),
    end: new Date("2023-10-01T10:00:00")
  },
  {
    title: "Lunch with Alice",
    start: new Date("2023-10-01T12:00:00"),
    end: new Date("2023-10-01T13:00:00")
  },
  {
    title: "Project discussion",
    start: new Date("2023-10-02T11:00:00"),
    end: new Date("2023-10-02T12:00:00")
  },
  {
    title: "Doctor's appointment",
    start: new Date("2023-10-03T15:00:00"),
    end: new Date("2023-10-03T16:00:00")
  },
  {
    title: "Team meeting",
    start: new Date("2023-10-04T10:00:00"),
    end: new Date("2023-10-04T11:00:00")
  },
  {
    title: "Client call",
    start: new Date("2023-10-05T14:00:00"),
    end: new Date("2023-10-05T15:00:00")
  },
  {
    title: "Workshop",
    start: new Date("2023-10-06T09:00:00"),
    end: new Date("2023-10-06T11:00:00")
  },
  {
    title: "Webinar",
    start: new Date("2023-10-07T13:00:00"),
    end: new Date("2023-10-07T14:00:00")
  },
  {
    title: "Conference",
    start: new Date("2023-10-08T10:00:00"),
    end: new Date("2023-10-08T12:00:00")
  },
  {
    title: "Networking event",
    start: new Date("2023-10-09T17:00:00"),
    end: new Date("2023-10-09T19:00:00")
  }
]