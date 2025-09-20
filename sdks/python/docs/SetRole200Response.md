# SetRole200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user** | [**User**](User.md) |  | [optional] 

## Example

```python
from better_auth.models.set_role200_response import SetRole200Response

# TODO update the JSON string below
json = "{}"
# create an instance of SetRole200Response from a JSON string
set_role200_response_instance = SetRole200Response.from_json(json)
# print the JSON string representation of the object
print(SetRole200Response.to_json())

# convert the object into a dict
set_role200_response_dict = set_role200_response_instance.to_dict()
# create an instance of SetRole200Response from a dict
set_role200_response_from_dict = SetRole200Response.from_dict(set_role200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


