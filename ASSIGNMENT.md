# Additional assignment

## 1. Hotel list

**How to share knowledge:**

- On the list page : I don't think that most of users like user event that may happen to move to other pages.
  To reduce this kind of hassle events, we can make mousemove event on rating information.
  When users hover that, they get some brief late information which include rating and short comment.

**Optional:**

- Did you miss something in our hotel API? : It would be better, if I add hot deal items, geolocation and whether allow pets or not.
- Of course, we need detailed information with a lot of pictures.

## 2. The Flight

**Backend API for flight list:**
We might need two kinds of endpoints.
Both of them are available get data from same schema.(Please refer to flights-sample.json)

- Get flights based on departure/arrival to find flights in usual way.
- Get flights based on geolocation to find flights info near the hotel which we would like to make a reservation. In this case, we also need geolocation in hotels schema.

However users also will need detail information to book a seat or check price or something.
To do that, we probably need this kind of information.(Please refer to filght-detail-sample.json)

- To get this inforamtion, we would like to pass flightId and seat type.(i.e. economy, business, firstclass)
