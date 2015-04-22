'''
Created on May 29, 2014
The API that our clients will use.
@author: boutell
'''

import endpoints
from protorpc import remote
from models import Weatherpic
import main

@endpoints.api(name="weatherpics", version="v1", description="Weather Pics API", hostname="fisherds-weatherpics.appspot.com")
class WeatherpicsApi(remote.Service):

    @Weatherpic.method(path="weatherpic/insert", http_method="POST", name="weatherpic.insert")
    def weatherpic_insert(self, request):
        """ Insert a weatherpic """
        if request.from_datastore:
            my_weatherpic = request
        else:
            my_weatherpic = Weatherpic(parent=main.PARENT_KEY, caption=request.caption, image_url=request.image_url)
        my_weatherpic.put()
        return my_weatherpic

    @Weatherpic.query_method(path="weatherpic/list", http_method="GET",
                             name="weatherpic.list", query_fields=("limit", "order", "pageToken"))
    def weatherpic_list(self, query):
        """ Return all the weatherpics """
        return query

    @Weatherpic.method(request_fields=("entityKey",), path="weatherpic/delete/{entityKey}",
                       http_method="DELETE", name="weatherpic.delete")
    def weatherpic_delete(self, request):
        """ Delete the given weatherpic if present """
        if not request.from_datastore:
            raise endpoints.NotFoundException("weatherpic not found")
        request.key.delete()
        return Weatherpic(caption="deleted")

app = endpoints.api_server([WeatherpicsApi], restricted=False)
