# UpdateUserPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the user | [optional] 
**image** | **str** | The image of the user | [optional] 

## Example

```python
from better_auth.models.update_user_post_request import UpdateUserPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateUserPostRequest from a JSON string
update_user_post_request_instance = UpdateUserPostRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateUserPostRequest.to_json())

# convert the object into a dict
update_user_post_request_dict = update_user_post_request_instance.to_dict()
# create an instance of UpdateUserPostRequest from a dict
update_user_post_request_from_dict = UpdateUserPostRequest.from_dict(update_user_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


