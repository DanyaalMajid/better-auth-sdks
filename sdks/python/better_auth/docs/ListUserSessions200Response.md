# ListUserSessions200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sessions** | [**List[Session]**](Session.md) |  | [optional] 

## Example

```python
from better_auth.models.list_user_sessions200_response import ListUserSessions200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ListUserSessions200Response from a JSON string
list_user_sessions200_response_instance = ListUserSessions200Response.from_json(json)
# print the JSON string representation of the object
print(ListUserSessions200Response.to_json())

# convert the object into a dict
list_user_sessions200_response_dict = list_user_sessions200_response_instance.to_dict()
# create an instance of ListUserSessions200Response from a dict
list_user_sessions200_response_from_dict = ListUserSessions200Response.from_dict(list_user_sessions200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


