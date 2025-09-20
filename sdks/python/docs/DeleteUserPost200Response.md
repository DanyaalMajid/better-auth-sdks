# DeleteUserPost200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **bool** | Indicates if the operation was successful | 
**message** | **str** | Status message of the deletion process | 

## Example

```python
from better_auth.models.delete_user_post200_response import DeleteUserPost200Response

# TODO update the JSON string below
json = "{}"
# create an instance of DeleteUserPost200Response from a JSON string
delete_user_post200_response_instance = DeleteUserPost200Response.from_json(json)
# print the JSON string representation of the object
print(DeleteUserPost200Response.to_json())

# convert the object into a dict
delete_user_post200_response_dict = delete_user_post200_response_instance.to_dict()
# create an instance of DeleteUserPost200Response from a dict
delete_user_post200_response_from_dict = DeleteUserPost200Response.from_dict(delete_user_post200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


