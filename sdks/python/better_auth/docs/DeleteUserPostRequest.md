# DeleteUserPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**callback_url** | **str** | The callback URL to redirect to after the user is deleted | [optional] 
**password** | **str** | The password of the user is required to delete the user | [optional] 
**token** | **str** | The token to delete the user is required | [optional] 

## Example

```python
from better_auth.models.delete_user_post_request import DeleteUserPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DeleteUserPostRequest from a JSON string
delete_user_post_request_instance = DeleteUserPostRequest.from_json(json)
# print the JSON string representation of the object
print(DeleteUserPostRequest.to_json())

# convert the object into a dict
delete_user_post_request_dict = delete_user_post_request_instance.to_dict()
# create an instance of DeleteUserPostRequest from a dict
delete_user_post_request_from_dict = DeleteUserPostRequest.from_dict(delete_user_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


