# IsUsernameAvailablePostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**username** | **str** | The username to check | 

## Example

```python
from better_auth.models.is_username_available_post_request import IsUsernameAvailablePostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of IsUsernameAvailablePostRequest from a JSON string
is_username_available_post_request_instance = IsUsernameAvailablePostRequest.from_json(json)
# print the JSON string representation of the object
print(IsUsernameAvailablePostRequest.to_json())

# convert the object into a dict
is_username_available_post_request_dict = is_username_available_post_request_instance.to_dict()
# create an instance of IsUsernameAvailablePostRequest from a dict
is_username_available_post_request_from_dict = IsUsernameAvailablePostRequest.from_dict(is_username_available_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


