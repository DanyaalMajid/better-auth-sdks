# GetSessionGet200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**session** | [**Session**](Session.md) |  | 
**user** | [**User**](User.md) |  | 

## Example

```python
from better_auth.models.get_session_get200_response import GetSessionGet200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetSessionGet200Response from a JSON string
get_session_get200_response_instance = GetSessionGet200Response.from_json(json)
# print the JSON string representation of the object
print(GetSessionGet200Response.to_json())

# convert the object into a dict
get_session_get200_response_dict = get_session_get200_response_instance.to_dict()
# create an instance of GetSessionGet200Response from a dict
get_session_get200_response_from_dict = GetSessionGet200Response.from_dict(get_session_get200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


