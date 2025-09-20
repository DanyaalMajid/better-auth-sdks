# UpdateUserPost200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **bool** | Indicates if the update was successful | [optional] 

## Example

```python
from better_auth.models.update_user_post200_response import UpdateUserPost200Response

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateUserPost200Response from a JSON string
update_user_post200_response_instance = UpdateUserPost200Response.from_json(json)
# print the JSON string representation of the object
print(UpdateUserPost200Response.to_json())

# convert the object into a dict
update_user_post200_response_dict = update_user_post200_response_instance.to_dict()
# create an instance of UpdateUserPost200Response from a dict
update_user_post200_response_from_dict = UpdateUserPost200Response.from_dict(update_user_post200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


