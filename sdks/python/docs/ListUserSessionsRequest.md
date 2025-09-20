# ListUserSessionsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user_id** | **str** | The user id | 

## Example

```python
from better_auth.models.list_user_sessions_request import ListUserSessionsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ListUserSessionsRequest from a JSON string
list_user_sessions_request_instance = ListUserSessionsRequest.from_json(json)
# print the JSON string representation of the object
print(ListUserSessionsRequest.to_json())

# convert the object into a dict
list_user_sessions_request_dict = list_user_sessions_request_instance.to_dict()
# create an instance of ListUserSessionsRequest from a dict
list_user_sessions_request_from_dict = ListUserSessionsRequest.from_dict(list_user_sessions_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


